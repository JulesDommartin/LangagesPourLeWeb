#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <fstream>
#include "FromXMLToGoogleMapHTTPRequest.h"
#include "FromGoogleMapXMLToDistanceTable.h"
#include "SortVisits.h"

#include "../travel-optimisation/affiche.h"

void testSaxParser() {
  std::string filename="";
  std::cout << "Entrer le chemin relatif vers le fichier à parser: " << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> filename;
  //std::cout << "Parsing du fichier: " << filename << std::cout;
  LwSaxParser simpleParser;
  std::cout << std::endl;
  std::cout << std::endl;
  simpleParser.parseDocument(filename.c_str());
  std::cout << std::endl;
}

void testGetGoogleMapHttpRequest() {
  std::string filename ="";
  int idInt = 1;
  std::cout << "Entrer le chemin relatif vers le fichier à parser: " << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> filename;
  std::cout << "Entrer le numéro de l'infirmier(e) (1 chiffre, sans 00 devant): " << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> idInt;
  
  std::cout << std::endl;
  std::cout << std::endl;
  FromXMLToGoogleMapHTTPRequest dataBaseParser;
  char * requette = dataBaseParser.getGoogleHttpRequest(filename.c_str(), idInt);
  std::cout << std::endl;
  std::cout << "La requête HTTP est: " << requette;
}


void testCreateCPPTableFromXML() {
  std::string filename ="";
  std::cout << "Entrer le chemin relatif vers le fichier à parser (réponse XML de GoogleMap): " << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> filename;
  FromGoogleMapXMLToDistanceTable googleMapParser;
  googleMapParser.parseDocument(filename.c_str());
  std::cout << std::endl;
  std::cout << std::endl;

  std::vector<std::string> * adresses;
  std::vector< std::vector<int> > * distances;
  
  adresses = googleMapParser.getAdresses();
  distances = googleMapParser.getDistances();

  vector<vector<int> > &refsurGraphe= (*distances);
  vector<string> &refsurAdresses = (*adresses);    

  afficheGraphe(refsurGraphe);
  cout << "Adresses contient: " << endl;
  afficheVectorString(refsurAdresses);  

}



void testProcessDistanceMatrix() {
  //  @param inputFileName: Chemin relatif vers le fichier cabinet.xml
  std::string inputFileName = "";
  std::cout << "Entrer le chemin relatif vers le fichier cabinet.xml où les patients ne sont pas classés par ordre de passage." << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> inputFileName;
     
  // @param googleAnswer: fichier XML où est stocké une réponse GoogleMap
  std::string googleAnswerFile;
  std::cout << "Entrer le chemin relatif vers le fichier XML de réponse de GoogleMap." << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> googleAnswerFile;
  
  // @param id: Identifiant sous forme d'entier de l'infirmière pour lequel il faut classer les patients d'après leurs adresses.
  int id;
  std::cout << "Entrer l'identifiant de l'infirmière sous forme d'entier." << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> id;
  
  // @param xslFilename: chemin relatif vers la feuille de transformation xslt qui permet de transformer le document cabinet.xml final en un document html bien mis en forme et lisible par l'infirmière
  std::string xslFilename = "";
  std::cout << "Entrer le chemin relatif vers le fichier de transformation XSLT." << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> xslFilename;

  // @param outptuFileName: chemin relatif où sera stocké le fichier html de sortie (la page de l'infirmière) où les patients sont ordonnées d'après leur adresse.
  std::string outputFilename = "";
  std::cout << "Entrer le chemin relatif vers le fichier HTM final." << std::endl;
  std::cout << "-------------------------------------------" << std::endl;
  std::cin >> outputFilename;

  
  SortVisits sorter;
  sorter.processDistanceMatrix(inputFileName.c_str(), googleAnswerFile.c_str(), id, xslFilename.c_str(), outputFilename.c_str());

     
}

int main(int argc, char *argv[]) {
  int option = -1;
  while (option != 0) {
    std::cout << "-------------------------------------------" << std::endl;
    std::cout << "Que voulez-vous faire ?" << std::endl;
    std::cout << "0 quitter l'application" << std::endl;
    std::cout << "1 tester le parseur LwSaxParser" << std::endl;
    std::cout << "2 obtenir la requête HTTP à envoyer à GoogleMap pour récupérer les matrices de distances entre les adresses " << std::endl;
    std::cout << "3 créer un tableau c++ à partir du fichier XML renvoyé par GoogleMap " << std::endl;
    std::cout << "4 Tester la méthode SortVisit::processDistanceMatrix" << std::endl;
    std::cout << "Veuillez taper 0, 1, 2, 3 ou 4" << std::endl;
    std::cout << "-------------------------------------------" << std::endl;

    std::cin >> option;

    if (std::cin.fail()) {
      std::cin.clear();
      option = -1;
    }

    switch (option) {
    case 0: // On ne fait rien et l'on s'en va...
      break;
                
    case 1:
      testSaxParser();
      break;

      
    case 2: // obtenir la requête HTTP à envoyer à GoogleMap pour récupérer les matrices de distances entre les adresses
      testGetGoogleMapHttpRequest();
      break;
     
    case 3: // créer un tableau c++ à partir du fichier XML renvoyé par GoogleMap
      testCreateCPPTableFromXML();
      break;

    case 4: // Modifier la base de données XML donnée avec une liste d'adresses ordonnées pour une infirmière
      testProcessDistanceMatrix();
      break;
    default:
      option = -1;
      break;
    }
    std::cout << std::endl << "-------------------------------------------" << std::endl << std::endl;
  }

  return 0;
}
