#include "LwSaxParser.h"
#include <vector>

class FromGoogleMapXMLToDistanceTable : public LwSaxParser {
    
 public:
  // Enumération des différents états possible du parseur
  enum PossibleStates {START, ORIGIN_ADDRESS, ROW, ELEMENT, DISTANCE, VALUE, UNKNOWN};
    
  /// Constructeur
  FromGoogleMapXMLToDistanceTable();
    
  /// Desctructeur
  ~FromGoogleMapXMLToDistanceTable();
    
  /// Liste des adresses
  std::vector<std::string> * getAdresses();
    
  /**
   * Distance en mètres entre les adresses
   * Le vecteur général est un vecteur de ligne.
   * Sur chaque ligne numéro i, il y a la distance entre l'adresses numéro i de getAdresses
   *  et chacune des adresses numéro j (à la colonne j).
   */
  std::vector< std::vector<int> > * getDistances();
  
  void on_start_element(const Glib::ustring& name, const AttributeList& attributes);

  void on_end_element(const Glib::ustring& name);

  void on_characters(const Glib::ustring& text);

  void on_start_document();

  void on_end_document();
    
 protected:
  /** 
   * Méthodes ré-implemntées (surchargées) de la classe SaxParser
   * @{
   */
  // A compléter en recompiant la signature des méthodes à redéfinir

  /**
   * @}
   */
  
    
  /// Attributs
    
  /// Etat courant
  int state;
   
  std::string adresseCourante;
  /// Vecteur des adresses à remplir
  std::vector<std::string> * adresses;
   
  /// Matrice des distances à remplir
  int numeroLigne;
  std::vector<int> * ligne;
  std::vector< std::vector<int> > * distanceMatrix;
    
};
