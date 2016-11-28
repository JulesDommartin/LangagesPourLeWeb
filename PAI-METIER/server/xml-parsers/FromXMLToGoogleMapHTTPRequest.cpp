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

void FromXMLToGoogleMapHTTPRequest::on_start_element(const Glib::ustring& name, const AttributeList& attributes) {
    std::cout << "  - Debut element" << std::endl;
    std::cout << "      - le nom : " << name.c_str() << std::endl;   

    if (strcmp(name.c_str(), "adresse") == 0) {
        this->currentAddress = new Address();
        this->currentState = ADRESSE;
    } else if (strcmp(name.c_str(), "numéro") == 0 && this->currentState == ADRESSE) {
        this->currentState = NUMERO;
    } else if (strcmp(name.c_str(), "rue") == 0) {
        this->currentState = RUE;
    } else if (strcmp(name.c_str(), "ville") == 0) {
        this->currentState = VILLE;
    } else if (strcmp(name.c_str(), "codePostal") == 0) {
        this->currentState = CODEPOSTAL;
    } else if (strcmp(name.c_str(), "visite") == 0) {
        this->currentState = VISITE;
    } else if (strcmp(name.c_str(), "cabinet") == 0) {
        this->isCabinet = true;
    } else if (strcmp(name.c_str(), "infirmiers") == 0) {
        this->addressList += this->currentAddress->getGoogleAdresse() + "|";
        this->currentAddress = NULL;
        this->isCabinet = false;
    } else {
        std::cout << "Non traité" << std::endl;
    }

    const char * id = "";

    if (this->currentState == VISITE) {
        for(xmlpp::SaxParser::AttributeList::const_iterator iter = attributes.begin(); iter != attributes.end(); ++iter)
        {
          std::cout << "      - un attribut : (" << iter->name.c_str() << " = " << iter->value.c_str() << ")" << std::endl;
          if (strcmp(iter->name.c_str(), "intervenant") == 0) {
            id = iter->value.c_str();
          }
        }

        if (strcmp(id, this->nurseId.c_str()) == 0) {
            this->addressList += this->currentAddress->getGoogleAdresse() + "|";
            this->currentAddress = NULL;
        }
    }
}

void FromXMLToGoogleMapHTTPRequest::on_end_element(const Glib::ustring& name) {
    std::cout << "  -Fin element : " << name.c_str() << std::endl;
    this->currentState = OTHER;
    if (strcmp(name.c_str(), "patient") == 0 && this->currentAddress != NULL) {
        std::cout << this->currentAddress->getGoogleAdresse()<< std::endl;
    }
}

void FromXMLToGoogleMapHTTPRequest::on_characters(const Glib::ustring& text) {
    std::cout << "          -    Le texte : " << text.c_str() << std::endl;
    switch (this->currentState) {
        case NUMERO :
            this->currentAddress->setNumero(text.c_str());
            break;
        case RUE :
            this->currentAddress->setRue(text.c_str()); 
            break;
        case VILLE :
            this->currentAddress->setVille(text.c_str());
            break;
        case CODEPOSTAL :
            this->currentAddress->setCodePostal(text.c_str());
            break;
        default :
            break;
    }
}

void FromXMLToGoogleMapHTTPRequest::on_start_document() {
    this->currentState = START;
}

void FromXMLToGoogleMapHTTPRequest::on_end_document() {
    this->request = "https://maps.googleapis.com/maps/api/distancematrix/xml?origins=" + this->addressList + "&destinations=" + this->addressList;
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
