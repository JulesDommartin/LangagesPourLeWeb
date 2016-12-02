#ifndef FROMXMLTOGOOGLEMAPHTTPREQUEST_H
#define FROMXMLTOGOOGLEMAPHTTPREQUEST_H

#include "LwSaxParser.h"
#include <string>
#include "Address.h"

class FromXMLToGoogleMapHTTPRequest : public LwSaxParser {

public:
    // Enumération des différents états possible du parseur
    enum PossibleStates {START, PATIENT, ADRESSE, ETAGE, NUMERO, RUE, VILLE, CODEPOSTAL, VISITE, OTHER};
    
    /// Constructeur
    FromXMLToGoogleMapHTTPRequest();
    
    /// Desctructeur
    ~FromXMLToGoogleMapHTTPRequest();

    /** LA méthode qui est appelée par le proxy pour récupérer la requête http à 
     *   envoyer à GoogleMap pour récupérer la matrice des distances.
     * @dataBaseFileName nom du fichier XML de la base de données infirmières
     * @nurseNumber numéro de l'infirmière pour laquelle le serveur demande la requette
     */
    char * getGoogleHttpRequest(const char * dataBaseFileName, int nurseNumber);
    
    void on_start_element(const Glib::ustring& name, const AttributeList& attributes);

    void on_end_element(const Glib::ustring& name);

    void on_characters(const Glib::ustring& text);

    void on_start_document();

    void on_end_document();

protected:
    
    /// Est-on en train de lire l'adresse du cabinet plutôt que celle d'un patient ?
    bool isCabinet;
    
    /// id de l'infirmière
    std::string nurseId;
    
    /// Etat courant
    PossibleStates currentState;
    
    /// Stockage des listes d'adresse au format GoogleMap
    std::string addressList;
    
    /// Stockage de la requete Google sous forme de std::string (plus simple à manipuler)
    std::string request;
    
    /// Adresse que l'on est en train de remplir
    ///  Elle sera ajoutée à listeAdresse après vérification qu'un élément visite contient bien l'id de l'infirmière
    Address * currentAddress;
        
    
    /** 
    * Méthodes ré-implemntées (surchargées) de la classe SaxParser
    * @{
    */
    
    // A compléter en recompiant la signature des méthodes à redéfinir
    
      
    /**
     * @}
     */
   
protected:
    // Cherche attributeName dans la liste des attributs et renvoie sa valeur
    // renvoie la chaîne de caractères vide si l'attribut n'est pas trouvé.
    std::string findAttribute(const AttributeList& attributeList, std::string attributeName);


};

#endif
