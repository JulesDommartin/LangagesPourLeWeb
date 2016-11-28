package management;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

/**
 * Classe SIMPLIFIEE permettant de lire un dictionnaire de Tuxamots Cette classe
 * est un handler permettant le parse SAX
 *
 * @author Johan
 */
public class DicoHandler extends DefaultHandler {

    // ce qui permet de lire et stocké le contenu xml
    private StringBuffer buffer;
    private int currentWordLevel;
    private ArrayList<String>[] listLevels;
    private final int NB_NIVEAUX = 5;

    private String pathToDicoFile;
    
    
    public String getWordFromListLevel(int level) {
       if (listLevels[level - 1].size() == 0) {
            return null;
        }
        return listLevels[level - 1].get((int)Math.floor(Math.random() * listLevels[level - 1].size()));
    }

    public DicoHandler() {
        super();
        this.pathToDicoFile = pathToDicoFile;
        this.createLevelArrays();
    }
    
    public void createLevelArrays() {
        this.listLevels = new ArrayList[this.NB_NIVEAUX];
        for (int i = 0; i < this.NB_NIVEAUX; i++) 
            this.listLevels[i] = new ArrayList<String>();
    }

    public void readDictionnary(String link) {
        pathToDicoFile = link;

        try {
            // création d'une fabrique de parseurs SAX
            SAXParserFactory fabrique = SAXParserFactory.newInstance();

            // création d'un parseur SAX
            SAXParser parseur = fabrique.newSAXParser();

            // lecture d'un fichier XML avec un DefaultHandler
            File fichier = new File(pathToDicoFile);
            parseur.parse(fichier, this);

        } catch (ParserConfigurationException pce) {
            System.out.println("Erreur de configuration du parseur");
            System.out.println("Lors de l'appel à newSAXParser()");
        } catch (SAXException se) {
            System.out.println("Erreur de parsing");
            System.out.println("Lors de l'appel à parse()");
        } catch (IOException ioe) {
            System.out.println("Erreur d'entrée/sortie");
            System.out.println("Lors de l'appel à parse()");
        }
    }

    public boolean addWordToDico(int level, String word) {
        // We replace all the special caracteres by a known one
        word = word .replace("à", "a")
                    .replace("á", "a")
                    .replace("â", "a")
                    .replace("ä", "a")
                    .replace("å", "a")
                    .replace("ã", "a")
                    .replace("é", "e")
                    .replace("è", "e")
                    .replace("ë", "e")
                    .replace("ê", "e")
                    .replace("î", "i")
                    .replace("ï", "i")
                    .replace("í", "i")
                    .replace("ì", "i")
                    .replace("ò", "o")
                    .replace("ó", "o")
                    .replace("ô", "o")
                    .replace("õ", "o")
                    .replace("ö", "o")
                    .replace("ù", "u")
                    .replace("ú", "u")
                    .replace("û", "u")
                    .replace("ü", "u")
                    .replace("ý", "y")
                    .replace("ÿ", "y");
        this.listLevels[level - 1].add(word);
        return true;
    }

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {

        if (qName.equals("dico")) {
            //rien à faire
        } else if (qName.equals("???")) {
	    //crée un buffer
            buffer = new StringBuffer();

	    //Récupération d'un attribut
            //check l'attribut
            if (attributes.getIndex("level") != -1) {
		//Transforme le String en int. (Google est mon ami)
                currentWordLevel = Integer.parseInt(attributes.getValue("level"));
            } else {
                //pas de level -> erreur XML
                System.out.println("Erreur dans le XML; le mot est rejeté !");
            }
        } else {
            //erreur, on peut lever une exception
            throw new SAXException("Balise " + qName + " inconnue.");
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName)
            throws SAXException {

        if (qName.equals("dico")) {
            //rien à faire
        } else if (qName.equals("word")) {
	    //on ajoute le mot au dico.
            addWordToDico(currentWordLevel, buffer.toString());
            //on  nettoie le buffer
            buffer = null;
        } else {
            //erreur, on peut lever une exception
            throw new SAXException("Balise " + qName + " inconnue.");
        }
    }

    @Override
    public void characters(char[] ch, int start, int length)
            throws SAXException {

	//on récupère le résultat du parse de la méthode characters si celui-ci n'est pas null.
        String lecture = new String(ch, start, length);
        if (buffer != null) {
            buffer.append(lecture);
        }
    }

    @Override
    public void startDocument() throws SAXException {
        System.out.println("Début du parsing");
    }

    @Override
    public void endDocument() throws SAXException {
        System.out.println("Fin du parsing");
    }
    
    
    //getters and setters
    public String getPathToDicoFile() {
        return this.pathToDicoFile;
    }
}
