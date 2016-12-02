#include <stdio.h>
#include <string.h>
#include <iostream>
#include "FromGoogleMapXMLToDistanceTable.h"

// Constructeur
FromGoogleMapXMLToDistanceTable::FromGoogleMapXMLToDistanceTable() : LwSaxParser() {
  state = UNKNOWN;
  adresseCourante = "";
  adresses = new std::vector<std::string>();
  numeroLigne = -1;
  ligne = new std::vector<int>();
  distanceMatrix = NULL;
}


FromGoogleMapXMLToDistanceTable::~FromGoogleMapXMLToDistanceTable() {
    
}


void FromGoogleMapXMLToDistanceTable::on_start_element(const Glib::ustring& name, const AttributeList& attributes) {
  std::cout << "On y est" << std::endl;
  if (strcmp(name.c_str(), "origin_address") == 0) {
      this->state = ORIGIN_ADDRESS;
  } else if (strcmp(name.c_str(), "row") == 0) {
    this->state = ROW;
  } else if (strcmp(name.c_str(), "element") == 0) {
    this->state = ELEMENT;
  } else if (strcmp(name.c_str(), "distance") == 0) {
    this->state = DISTANCE;
  } else if (strcmp(name.c_str(), "value") == 0 && this->state == DISTANCE) {
    this->state = VALUE;
  }

}

void FromGoogleMapXMLToDistanceTable::on_end_element(const Glib::ustring& name) {
  std::cout << "  -Fin element : " << name.c_str() << std::endl;
  this->state = UNKNOWN;
  if (strcmp(name.c_str(), "row") == 0) {
    std::cout << "On ajoute une row" << std::endl;
    if (this->distanceMatrix == NULL) {
      std::cout << "La matrice est nulle" << std::endl;
    } else {
      std::cout << "On ajoute la matrice" << std::endl;
      this->distanceMatrix->push_back(*(this->ligne));
    }
    this->ligne = new std::vector<int>();
  } else if (strcmp(name.c_str(), "origin_address") == 0) {
    std::cout << "On ajoute une adresse" << std::endl;
    this->adresses->push_back(this->adresseCourante);
    this->adresseCourante = "";
  }
}

void FromGoogleMapXMLToDistanceTable::on_characters(const Glib::ustring& text) {
  switch (this->state) {
    case ORIGIN_ADDRESS: 
      this->adresseCourante += text.c_str();
      break;
    case VALUE:
      std::cout << "On ajoute une valeur : " << text.c_str() << std::endl;
      if (this->ligne == NULL) {
        std::cout << "C'est nul" << std::endl;
      } else {
        this->ligne->push_back(atoi(text.c_str()));
        std::cout << "C'est là que ça bug" << std::endl;
      }
    default:
      break;
  }
}

void FromGoogleMapXMLToDistanceTable::on_start_document() {
  this->state = START;
  this->ligne = 0;
  this->distanceMatrix = new std::vector< std::vector<int> >();
}

void FromGoogleMapXMLToDistanceTable::on_end_document() {

}


std::vector<std::string> * FromGoogleMapXMLToDistanceTable::getAdresses() {
     
  return this->adresses;
}

std::vector< std::vector<int> > * FromGoogleMapXMLToDistanceTable::getDistances() {
  /* Pour l'instant, on triche, on remplie arbitrairement les adresses.
   *  -> Evidemment, il faudra effacer cette partie du code pour ne renvoyer que la matrice des distances
   *     remplie par les autres méthodes à la lecture du fichier de réponse de GoogleMapAPI !
   */
  distanceMatrix = new std::vector< std::vector<int> >();
    
  std::vector<int> ligne0;
  ligne0.push_back(0);
  ligne0.push_back(5757);
  ligne0.push_back(7473);
  distanceMatrix->push_back(ligne0);
    
  std::vector<int> ligne1;
  ligne1.push_back(5782);
  ligne1.push_back(0);
  ligne1.push_back(3069);
  distanceMatrix->push_back(ligne1);
    
  std::vector<int> ligne2;
  ligne2.push_back(6822);
  ligne2.push_back(3339);
  ligne2.push_back(0);
  distanceMatrix->push_back(ligne2);    
    

  return distanceMatrix;
    
}

