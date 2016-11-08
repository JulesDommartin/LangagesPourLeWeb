#include "SortVisits.h"
#include <iostream>
#include <algorithm> 
#include <string.h>
#include <libxml/xmlmemory.h>
#include <libxml/debugXML.h>
#include <libxml/HTMLtree.h>
#include <libxml/xmlIO.h>
#include <libxml/DOCBparser.h>
#include <libxml/xinclude.h>
#include <libxml/catalog.h>
#include <libxslt/xslt.h>
#include <libxslt/xsltInternals.h>
#include <libxslt/transform.h>
#include <libxslt/xsltutils.h>

#include "Address.h"
#include "FromGoogleMapXMLToDistanceTable.h"


#include "../travel-optimisation/affiche.h"
// Ajouter ici les includes nécessaires de la partie RO


// Constructeur
SortVisits::SortVisits() {
    
}

SortVisits::~SortVisits() {
    
}

void SortVisits::processDistanceMatrix(const char * inputFileName,
				       const char * googleAnswer,
				       int id,
				       const char * xslFilename,
				       const char * outputFileName) {

  // 0- Déclaration des variables
  FromGoogleMapXMLToDistanceTable googleMapParser;
  std::vector<std::string> * adresses;
  std::vector< std::vector<int> > * distances;

  // 1- Récupération de la matrice de distance sous forme de vecteur de vecteur de int d'après le fichier xml renvoyé par GoogleMap
  googleMapParser.parseDocument(googleAnswer);
  adresses = googleMapParser.getAdresses();
  distances = googleMapParser.getDistances();

  // 2- Calcul du chemin optimal grâce à la matrice des distances en appelant les méthodes développées en RO
    
  // Ici, il faut appeler la fonction développée en RO
        
  // 3- Ré-organisation de la liste des adresse pour lui donner le bon ordre
    
  // Ici, il faut appeler la fonction développée en RO
    

  // 4- Ré-organisation de la liste des adresse dans le fichier xml original (sortie dans un nouveau fichier xml)
  std::string inputStd(inputFileName);
  std::string tmpFileName = inputStd.substr(0, inputStd.find_last_of("."));
  tmpFileName += "-sorted.xml";
    
  modifyFile(inputFileName, adresses, tmpFileName.c_str());

  // 5- Application de la transformation XSLT pour obtenir un document html lisible par l'infirmière
  saveXHTMLFile(inputFileName, xslFilename,outputFileName, id);
    
}

std::string SortVisits::getPatientNodeAdresse(xmlpp::Node * adresseNode) {
  Address adresse;
  xmlpp::Node * node;
  xmlpp::Element * element;
    
  xmlpp::Node::PrefixNsMap nsMap;
  nsMap["cab"] = "http://ujf-grenoble.fr/l3miage/medical";
    
  // On récupère le numéro s'il existe
  if (adresseNode->find("cab:numéro", nsMap).size() > 0) {
    node = adresseNode->find("cab:numéro", nsMap).at(0);
    element = dynamic_cast <xmlpp::Element *> (node);
    if (element != NULL) {
      std::string numero = element->get_child_text()->get_content();
      adresse.setNumero(numero);
    }
  }
    
  // On récupère la rue
  node = adresseNode->find("cab:rue", nsMap).at(0);
  element = dynamic_cast <xmlpp::Element *> (node);
  if (element != NULL) {
    std::string rue = element->get_child_text()->get_content();
    adresse.setRue(rue);
  }
    
  // On récupère la ville
  node = adresseNode->find("cab:ville", nsMap).at(0);
  element = dynamic_cast <xmlpp::Element *> (node);
  if (element != NULL) {
    std::string rue = element->get_child_text()->get_content();
    adresse.setVille(rue);
  }
    
  // On récupère le code postal
  node = adresseNode->find("cab:codePostal", nsMap).at(0);
  element = dynamic_cast <xmlpp::Element *> (node);
  if (element != NULL) {
    std::string code = element->get_child_text()->get_content();
    adresse.setCodePostal(code);
  }
    
  return adresse.getGoogleAnswerAdress();
}


/// Faire le job...
void SortVisits::modifyFile(const char * inputFilename,
			    std::vector<std::string> * adresses,
			    const char * outputFilename) {
  std::cout << " Modifying xml file..." << std::endl;
  xmlpp::DomParser parser;
  parser.parse_file(inputFilename);
  if(parser)
    {
      //Walk the tree:
      xmlpp::Document * doc = parser.get_document();
      const xmlpp::Node* node = doc->get_root_node(); //deleted by DomParser.

      // Lorsque l'on a un namespace par défaut, il faut impérativement dans libxml (et libxml++)
      //   déclarer un préfixe pour ce namespace.
      xmlpp::Node::PrefixNsMap nsMap;
      nsMap["cab"] = "http://ujf-grenoble.fr/l3miage/medical";
	             
      // --------------- On ordonne les patients selon leur adresse
      // On recherche et stocke tous les patients dans une map avec pour
      // clé leur adresse
      std::map<std::string, xmlpp::Element *> patientsAdresses;
      // On doit construire les adresse de la même manière que lors du parsing
      xmlpp::NodeSet patientsNodes = node->find("//cab:patients", nsMap);
      if (patientsNodes.size() == 0) {
	std::cout << "Problème avec le document xml " << inputFilename << ", je ne trouve pas d'élément patients dans le namespace http://ujf-grenoble.fr/l3miage/medical, j'arrête les traitements ici..." << std::endl;
	return;
      }
      xmlpp::Node * patientsNode = node->find("//cab:patients", nsMap).at(0);
      xmlpp::NodeSet allPatients = patientsNode->find("cab:patient", nsMap);
      for(xmlpp::NodeSet::iterator iter = allPatients.begin(); iter != allPatients.end(); ++iter)
	{
	  
	  xmlpp::Element * patient = dynamic_cast<xmlpp::Element *>(*iter);
	  if (patient == NULL) {
	    std::cout << "je ne peux pas récupérer d'élément patient à partir de l'itérateur..." << std::endl;
	    return;
	  }
	  // Récupérer l'adresse du patient en question
	  xmlpp::NodeSet adressesNodes = patient->find("cab:adresse", nsMap);
	  if (adressesNodes.size() == 0) {
	    std::cout << "Je ne trouve pas d'adresse pour le patient " << patient << ", je ne peux pas aller plus loin, désolé..." << std::endl;
	    return;
	  }
	  xmlpp::Node * adresseNode = patient->find("cab:adresse", nsMap).at(0);
	  std::string adresse = getPatientNodeAdresse(adresseNode);
	  //	  std::cout << adresse  << std::endl;
	  xmlpp::Document * newDoc = new xmlpp::Document();
	  patientsAdresses[adresse] = newDoc->create_root_node_by_import(patient);
	  patientsNode->remove_child(patient);              
	}
          
      // Maintenant que tous les patients ont été supprimés du document, il faut les
      //  remettre dans le bon ordre
          
      // On parcourt les adresses d'entrées, on les cherche dans la map, si on les trouve, on les remets
      std::vector<std::string>::iterator it;
      for (it = adresses->begin(); it != adresses->end(); it++) {
	std::string sortedAdresse = (*it);
	xmlpp::Element * element = findAdresseInMap(sortedAdresse, patientsAdresses);
	if (element != NULL) {
	  //	  std::cout << "Child found !!, element name: " << std::string(element->get_name()) << std::endl;
	  patientsNode->import_node(element);
	}
      }
      // Serialize the output file
      doc->write_to_file(outputFilename, "UTF-8");
    }

}


xmlpp::Element * SortVisits::findAdresseInMap(std::string sortedAdresse, std::map<std::string, xmlpp::Element *> map) {
  std::string sortedLower = sortedAdresse;
  std::transform(sortedLower.begin(), sortedLower.end(), sortedLower.begin(), ::tolower);
  //  std::cout << std::endl << "Searching for adresse: " << sortedLower << std::endl;

  xmlpp::Element * element = NULL;
  std::map<std::string, xmlpp::Element *>::iterator it = map.begin();
  while ((it != map.end()) && (element == NULL)) {
    std::string mapLower = (it->first);
    std::transform(mapLower.begin(), mapLower.end(), mapLower.begin(), ::tolower);
    
    //    std::cout << "it adresse:     " << mapLower << std::endl;
        
    if (sortedLower.find(mapLower) != std::string::npos) {
      element = it->second;
      //      std::cout << "Found !!" << std::endl;
    }
    it++;
  }    

  return element;
}

// Ouvre le fichier inputXMLFile, lui applique la transformation XSLT contenue dans le
// fichier xslTransformationFile avec le paramètre nurseId et sauvegarde le résultat dans le
// fichier outputXHTMLFile.
//See http://libxmlplusplus.sourceforge.net/docs/manual/html/ar01s02.html
void SortVisits::saveXHTMLFile(const char * inputXMLFile,
			       const char * xslTransformationFile,
			       const char * outputXHTMLFile,
			       int nurseId)
{
  // File descriptor pour le fichier de sortie
  FILE *outFile = NULL;
    
  // Fichier de transformation
  xsltStylesheetPtr xslST = xsltParseStylesheetFile((const xmlChar *) (xslTransformationFile));

  const char *params[16 + 1];    	
    
  // On transforme l'identifiant de l'infirmière en chaîne de caractères     
  // Convertir l'entier nurseNumber en std::string pour pouvoir le stocker dans l'attribut id
  // Possible en C -> lire l'API doc de la méthode itoa
  char * idStr = new char[4];
  if (nurseId < 100) {
    if (nurseId < 10) {
      sprintf(idStr, "00%d", nurseId);
    } else {
      sprintf(idStr, "0%d", nurseId);
    }
  }
  else {
    sprintf(idStr, "%d", nurseId);
  }
        
  std::cout <<"Save XHTML File: input " << inputXMLFile << ", output: " << outputXHTMLFile << " with nurseId: " << idStr << std::endl;

  params[0] = "destinedId";
  params[1] = idStr;
  params[2] = NULL;
    
  xmlSubstituteEntitiesDefault(1);
  xmlLoadExtDtdDefaultValue = 1;

  xmlDocPtr doc = xmlParseFile(inputXMLFile);    
  xmlDocPtr res = xsltApplyStylesheet(xslST, doc, params);

  outFile=(fopen(outputXHTMLFile,"w"));
  if(outFile==NULL){
    printf("Error!");
    exit(1);
  }

  xsltSaveResultToFile(outFile, res, xslST);

  fclose(outFile);
    
  xsltFreeStylesheet(xslST);
  xmlFreeDoc(res);
  xmlFreeDoc(doc);

  xsltCleanupGlobals();
  xmlCleanupParser();
    
}
