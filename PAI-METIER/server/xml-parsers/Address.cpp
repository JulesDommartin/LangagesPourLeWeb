#include "Address.h"

#include <algorithm>
#include <string>

// Implémentation du constructeur
// Rappel, en C++, comme ne Java, le role du constructeur est d'initialiser les attributs.
Address::Address() {
    hasNumero = false;
    numero = "";
    rue = "";
    ville = "";
    codePostal = "";
}

void Address::setNumero(std::string numero) {
    this->numero = numero;
    this->hasNumero = true;
}
void Address::setRue(std::string rue) {
    this->rue = rue;
}
void Address::setVille(std::string ville) {
    this->ville = ville;
}
void Address::setCodePostal(std::string codePostal) {
    this->codePostal = codePostal;
}

std::string Address::getGoogleAdresse() {
    std::string resultat = ville;
    resultat += "+" + codePostal;
    if (hasNumero) {
        resultat += "+" + numero;
    }
    std::replace(this->ville.begin(), this->ville.end(), ' ', '+');
    std::replace(this->rue.begin(), this->rue.end(), ' ', '+');
    resultat += "+" + rue;
    
    return resultat;
}

std::string Address::getGoogleAnswerAdress() {
    std::string adresse = "";
    if (! numero.empty()) {
        adresse += numero + " ";
    }
    adresse += rue + ", ";
    adresse += codePostal + " ";
    adresse += ville;
    
    return adresse;
}
