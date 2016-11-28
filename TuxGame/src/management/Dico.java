/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package management;

import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class Dico {
    
    private final int           NB_NIVEAUX = 5;
    private ArrayList<String>[] listLevels;
    private String              pathToDicoFile;

    public Dico(String pathToDicoFile) {
        this.pathToDicoFile = pathToDicoFile;
        this.createLevelArrays();
        this.parseDico();
    }

    private void parseDico() {
        try {
            // Parse the document
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder p   = dbFactory.newDocumentBuilder();
            Document doc        = p.parse(this.pathToDicoFile);
            
            NodeList lesMots   = doc.getElementsByTagName("mot");
            
            for (int i = 0; i < lesMots.getLength(); i++ ) {
                int level   = Integer.parseInt(lesMots.item(i).getAttributes().item(0).getTextContent());
                String mot  = lesMots.item(i).getChildNodes().item(1).getTextContent();
                this.addWordToDico(level, mot);
            }

            
        } catch (ParserConfigurationException ex) {
            Logger.getLogger(Dico.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SAXException ex) {
            Logger.getLogger(Dico.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(Dico.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public String getPathToDicoFile() {
        return pathToDicoFile;
    }
    
    public void createLevelArrays() {
        this.listLevels = new ArrayList[this.NB_NIVEAUX];
        for (int i = 0; i < this.NB_NIVEAUX; i++) 
            this.listLevels[i] = new ArrayList<String>();
    }
    
    public String getWordFromListLevel(int level) {
        if (listLevels[level - 1].size() == 0) {
            return null;
        }
        return listLevels[level - 1].get((int)Math.floor(Math.random() * listLevels[level - 1].size()));
    }
    
    public void addWordToDico(int level, String word) {
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
    }
   
}
