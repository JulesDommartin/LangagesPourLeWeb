#include <string>
#include <vector>
#include <map>


/*
 * Classe qui contient un parser DOM pour modifier le fichier d'entrée
 *  en y ajoutant ré-ordonnant les adresses à visiter
 */

/*
 * Ici, on déclare les classes dont on a besoin dans le namespace xmlpp
 *  au lieu d'inclure les fichiers .h pour éviter les inclusions et les
 *  dépendances réccursives
 */
namespace xmlpp {
    class Node;
    class Element;
}


/*
 * On aurait pu faire de ces méthodes des méthodes statiques.
 * Mais on reprend ici le paradygme "tout objet" comme en Java.
 * C'est donc une classe qui est chargée de rassembler et d'implémenter 
 *  toutes les méthodes nécessaires à la ré-organisation des adresses 
 *   dans le fichier cabinet.xml.
 *
 * Elle utilise pour cela le parseurs Sax que vous avez implémenté dans 
 *   la classe FrmGoogleMapXMLToDistanceTable.
 *
 */
class SortVisits {
    
public:
    /// Constructeur
    SortVisits();
    
    /// Desctructeur
    ~SortVisits();
    
    /** Méthode principale à utiliser dans la partie système/réseau:
     * @param inputFileName: Chemin relatif vers le fichier cabinet.xml
     *                       où les patients des infirmières ne sont pas classés par ordre de passage
     *                       de l'infirmière (fichier d'entrée de la méthode)
     * @param googleAnswer: Matrice des distances données par GoogleMap sous forme d'un chemin relatif vers le fichier
     * @param id: Identifiant sous forme d'entier de l'infirmière pour lequel il faut classer les patients 
     *             d'après leurs adresses.
     * @param xslFilename: chemin relatif vers la feuille de transformation xslt qui permet de transformer 
     *                      le document cabinet.xml final en un document html bien mis en forme et lisible 
     *                      par l'infirmière
     * @param outptuFileName: chemin relatif où sera stocké le fichier html de sortie (la page de l'infirmière)
     *                         où les patients sont ordonnées d'après leur adresse.
     *
     * Cette méthode:
     * 1- Récupère la matrice de distance sous forme de vecteur de vecteur de int d'après le fichier xml 
     *     inputFileName
     * 2- Calcule le chemin optimal grâce à la matrice des distances en appelant les méthodes développées en RO
     * 3- Ré-organise la liste des adresses pour lui donner le bon ordre
     * 4- Ré-organise la liste des adresse dans le fichier xml original (sortie dans un nouveau fichier xml)
     * 5- Applique la transformation XSLT pour obtenir un document html lisible par l'infirmière
     */
    void processDistanceMatrix(const char * inputFileName, const char * googleAnswer, int id, const char * xslFilename, const char * outputFileName);
    
    /// Ré-ordonne la liste des patients contenus dans inputFilename selon l'ordre donné dans le vecteur adresses
    void modifyFile(const char * inputFilename, std::vector<std::string> * adresses, const char * outputFilename);
    
    /// Ouvre le fichier inputXMLFile, lui applique la transformation XSLT contenue dans le
    /// fichier xslTransformationFile avec le paramètre nurseId et sauvegarde le résultat dans le
    /// fichier outputXHTMLFile.
    void saveXHTMLFile(const char * inputXMLFile, const char * xslTransformationFile, const char * outputXHTMLFile, int nurseId);
    
protected:
    /** 
     * Méthodes d'aide (calculs intermédiaires)
     * -> récupère sous forme de chaîne de caractères l'adresse d'un patient dont le noeud XML est passé en paramètre
     */
    std::string getPatientNodeAdresse(xmlpp::Node * adresseNode);
    
    /** 
     * Méthodes d'aide (calculs intermédiaires)
     * -> trouve quel patient de la map passée en paramètre a l'adresse sortedAdresse passé en premier paramètre.
     */
    xmlpp::Element * findAdresseInMap(std::string sortedAdresse, std::map<std::string, xmlpp::Element *> map);
};
