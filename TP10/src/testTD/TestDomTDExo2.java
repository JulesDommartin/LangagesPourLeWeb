package testTD;


import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class TestDomTDExo2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String nomFichier = LectureClavier.lireChaine("Please enter the file name\n");

        try {
            // analyse du document
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder p = dbFactory.newDocumentBuilder();
            // récupération de la structure objet du document
            Document doc = p.parse(nomFichier);

            System.out.println("1.6: doc.getElementsByTagName(\"film\").getLength()");

            // 1- Le nombre de films disponibles:
            System.out.println(doc.getElementsByTagName("film").getLength());

            // 2- Le troisème acteur du deuxième film
            // Récupération du deuxième film
            Element el = (Element) doc.getElementsByTagName("film").item(1);
            System.out.println(el.getElementsByTagName("acteur").item(2));

            // 3- Titres des films dont la fiche est en anglais:
            // Récupération de la liste des films
            NodeList lesFilms = doc.getElementsByTagName("film");
            for (int i = 0; i < lesFilms.getLength(); i++) {
                Element film = (Element) lesFilms.item(i);
//            for (Node n: lesFilms) { // Ne fonctionne pas !
//                Element film = (Element) n;
                String langue = film.getAttribute("lang");
                if (langue.equals("en")) {
                    System.out.println(film.getElementsByTagName("titre").item(0).getTextContent());
                }
            }

            // 4- Le nom du personnage dont l'identifiant est lukemonfils
            // On récupère tous les personnages
            NodeList lesActeurs = doc.getElementsByTagName("acteur");
            // On recherche celui dont l'id est lukemonfils
            String luke = "lukemonfils";
            int nb = 0;
            boolean trouvé = false;
            while ((nb < lesActeurs.getLength()) && (trouvé == false)) {
                Element acteur = (Element) lesActeurs.item(nb);
                if (acteur.getAttribute("id").equals(luke)) {
                    trouvé = true;
                }
                nb++;
            }
            if (trouvé) {
                Element acteur = (Element) lesActeurs.item(nb - 1);
                System.out.println(acteur.getAttribute("personnage"));
            }
            // Sinon, on utilise XPath...
            String xpathExpression = "//acteur[@id='lukemonfils']";
            XPath xpath = XPathFactory.newInstance().newXPath();
            NodeList nodes = (NodeList) xpath.evaluate(xpathExpression, doc, XPathConstants.NODESET);
            for (int i = 0; i < nodes.getLength(); i++) {
                Element perso = (Element) nodes.item(i);
                System.out.println(perso.getAttribute("personnage"));
            }

            // 5- Le titre des films sortis en 1981
            // On récupère les films
            System.out.println("Les films sortis en 1981");
            NodeList theFilms = doc.getElementsByTagName("film");
            for (int i = 0; i < theFilms.getLength(); i++) {
                Element film = (Element) theFilms.item(i);
                Element annee = (Element) film.getElementsByTagName("année").item(0);
                String year = annee.getTextContent();
                if (year.equals("1981")) {
                    Element titre = (Element) film.getElementsByTagName("titre").item(0);
                    System.out.println(titre.getTextContent());
                }
            }

            // 6- Le nombre de références faites au personnage dont l'identifiant est indy
            // On récupère tous les noeuds ref
            int count = 0;
            NodeList references = doc.getElementsByTagName("perso");
            for (int i = 0; i < references.getLength(); i++) {
                Element ref = (Element) references.item(i);
                if (ref.getAttribute("ref").equals("indy")) {
                    System.out.println("Un indy trouvé !");
                    count++;
                }
            }
            System.out.println("Il y a " + count + " références au personnage indy.");

            // 7- Les films sans acteurs
            for (int i = 0; i < theFilms.getLength(); i++) {
                Element film = (Element) theFilms.item(i);
                if (film.getElementsByTagName("acteur").getLength() == 0) {
                    System.out.println("Le film " + film.getElementsByTagName("titre").item(0).getTextContent() + " n'a pas d'acteur");
                }
            }

        } catch (Exception e) {
        }

    }
}
