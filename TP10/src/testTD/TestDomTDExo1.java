package testTD;


import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

/**
 *
 * @author cfouard
 */
public class TestDomTDExo1 {

    public static void main(String[] args) {
        String nomFichier = LectureClavier.lireChaine("Please enter the file name\n");

        try {
            // analyse du document
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder p = dbFactory.newDocumentBuilder();
            // récupération de la structure objet du document
            Document doc = p.parse(nomFichier);

            System.out.println("1.1- doc.getChildNodes().item(0).getNodeName(), etc.");
            System.out.println(doc.getChildNodes().item(0).getNodeName());
            System.out.println(doc.getChildNodes().item(0).getNodeType());
            System.out.println(doc.getChildNodes().item(0).getNodeValue());

            System.out.println("1.2- doc.getChildNodes().item(0).getChildNodes().item(0), etc");
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(0));
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(0).getNodeName());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(0).getNodeType());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(0).getNodeValue());

            System.out.println("1.3- doc.getChildNodes().item(0).getChildNodes().item(1).hasAttributes(), etc");
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getNodeName());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getNodeType());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getNodeValue());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).hasAttributes());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getAttributes().getLength());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getAttributes().item(0));

            System.out.println("1.4- doc.getChildNodes().item(0).getChildNodes().item(1).getChildNodes().item(0)");
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getChildNodes().item(0));
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getChildNodes().item(0).getTextContent());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getChildNodes().item(1));
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getChildNodes().item(1).getTextContent());
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getChildNodes().item(2));
            System.out.println(doc.getChildNodes().item(0).getChildNodes().item(1).getChildNodes().item(2).getTextContent());

            System.out.println("1.5- ((Element) doc.getElementsByTagName('acteur').item(1)).getElementsByTagName('p').item(1).getTextContent()");
            System.out.println(((Element) doc.getElementsByTagName("acteur").item(1)).getElementsByTagName("p").item(1).getTextContent());


        } catch (Exception e) {
        }

    }
}
