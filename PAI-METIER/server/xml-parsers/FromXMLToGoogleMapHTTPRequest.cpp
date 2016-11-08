#include <string.h>
#include <iostream>
#include <curl.h>

#include "Address.h"

#include "FromXMLToGoogleMapHTTPRequest.h"

// Constructeur
FromXMLToGoogleMapHTTPRequest::FromXMLToGoogleMapHTTPRequest() : LwSaxParser()
{
    // On initialise les attributs...
    isCabinet = false;
    nurseId = "";
    currentState = OTHER;
    addressList = "";
    request = "";
    currentAddress = NULL;
}

FromXMLToGoogleMapHTTPRequest::~FromXMLToGoogleMapHTTPRequest() {
    // On libère l'adresse courante
    if (currentAddress != NULL) {
        delete currentAddress;
    }    
}


char * FromXMLToGoogleMapHTTPRequest::getGoogleHttpRequest(const char * dataBaseFileName, int nurseNumber) {
    char * result;
    // Convertir l'entier nurseNumber en std::string pour pouvoir le stocker dans l'attribut id
    // Possible en C -> lire l'API doc de la méthode itoa ou sprintf
    // Plus simple en C++ en utilisant la STL
    std::ostringstream nbStr;
    if (nurseNumber < 100) {
        nbStr << "0";
    }
    if (nurseNumber < 10) {
        nbStr << "0";
    }
    nbStr << nurseNumber;
    nurseId = nbStr.str();
    std::cout << "Nurse Id: " << nurseId.c_str() << std::endl;
    
    // Parser le docuemnt
    parseDocument(dataBaseFileName);
    
    // Convertir la requête au format std::string en char *
    //    result = request.c_str(); -> ne fonctionne pas car request.c_str() renvoie quelque chose de const
    result = new char[request.length() + 1];
    strcpy(result, request.c_str());
        
    // Renvoyer le résultat    
    return result;
    
}


/*
 * Méthode d'aide qui permet de trouver un attribut qui a un certain nom dans une liste d'attribut.
 * Cette méthode existe de base dans l'API Sax de Java, mais pas ici, c'est pourquoi elle est donnée.
 */
std::string FromXMLToGoogleMapHTTPRequest::findAttribute(const AttributeList& attributeList, std::string attributeName) {
    std::string resultat = "";
    xmlpp::SaxParser::AttributeList::const_iterator iter = attributeList.begin();
    while ((iter != attributeList.end()) && (iter->name != attributeName)) {
        iter++;
    }
    if (iter != attributeList.end()) {
        resultat = iter->value;
    }
    return resultat;
}
