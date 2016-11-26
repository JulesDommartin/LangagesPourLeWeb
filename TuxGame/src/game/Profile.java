/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package game;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Result;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.w3c.dom.ls.DOMImplementationLS;
import org.w3c.dom.ls.LSSerializer;

/**
 *
 * @author dommartj
 */
public class Profile {
    
    private String              nom;
    private String              dateNaissance;
    private String              avatar;
    private ArrayList<Partie>   parties;

    public Profile(String nom, String dateNaissance) {
        this.nom            = nom;
        this.dateNaissance  = dateNaissance;
        this.avatar         = "";
        this.parties        = new ArrayList<Partie>();
    }
    
    public Profile(String filename) {
        try {
            
            // Parse the document
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder p   = dbFactory.newDocumentBuilder();
            Document doc        = p.parse(filename);
            
            this.nom            = doc.getElementsByTagName("name")      .item(0).getTextContent();
            this.dateNaissance  = this.xmlDateToProfileDate(doc.getElementsByTagName("birthday")  .item(0).getTextContent());
            this.avatar         = doc.getElementsByTagName("avatar")    .item(0).getTextContent();
            this.parties        = new ArrayList<Partie>();
            
            NodeList lesGames   = doc.getElementsByTagName("game");
            for (int i = 0; i < lesGames.getLength(); i++) {
                System.out.println("On ajoute une partie");
                this.ajouterPartie(new Partie((Element) lesGames.item(i)));
            }
            
        } catch(Exception e) {
            System.out.println(e.toString());
        }
    }
    
    public void ajouterPartie(Partie p) {
        this.parties.add(p);
    }
    
    public int getLastLevel() {
        int lastLevel = 0;
        // If there is one game with this profile, we get the level of the last played game
        if (this.parties.size() > 0) {
            lastLevel = this.parties.get(this.parties.size() - 1).getNiveau();
        }
        return lastLevel;
    }
    
    @Override
    public String toString() {
        String s = "Profile : \n\n\t- Nom : " + this.nom + "\n\tBirthday : " + this.dateNaissance + "\n\tAvatar : " + this.avatar + "\n";
        for (int i = 0; i < this.parties.size(); i++) {
            s += this.parties.get(i).toString();
        }
        return s;
    }
    
    public String getStringFromDoc(org.w3c.dom.Document doc)    {
        DOMImplementationLS domImplementation = (DOMImplementationLS) doc.getImplementation();
        LSSerializer lsSerializer = domImplementation.createLSSerializer();
        return lsSerializer.writeToString(doc);   
    }
    
    private Document getXmlDocument() throws ParserConfigurationException {
        DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder docBuilder = docFactory.newDocumentBuilder();

        // root elements
        Document doc        = docBuilder.newDocument();
        Element profile     = doc.createElement("profile");
        
        Element name        = doc.createElement("name");
        Element avatar      = doc.createElement("avatar");
        Element birthday    = doc.createElement("birthday");
        Element games       = doc.createElement("games");
        
        name.setTextContent(this.nom);
        avatar.setTextContent(this.avatar);
        birthday.setTextContent(this.profileDateToXmlDate(this.dateNaissance));
        
        for (int i = 0; i < this.parties.size(); i++) {
            games.appendChild(this.parties.get(i).getDomElement(doc));
        }
        
        profile.appendChild(name);
        profile.appendChild(avatar);
        profile.appendChild(birthday);
        profile.appendChild(games);
        doc.appendChild(profile);
                
        return doc;
    }
    
    /// Takes a date in XML format (i.e. ????-??-??) and returns a date
    /// in profile format: dd/mm/yyyy
    public static String xmlDateToProfileDate(String xmlDate) {
        String date;
        // récupérer le jour
        date = xmlDate.substring(xmlDate.lastIndexOf("-") + 1, xmlDate.length());
        date += "/";
        // récupérer le mois
        date += xmlDate.substring(xmlDate.indexOf("-") + 1, xmlDate.lastIndexOf("-"));
        date += "/";
        // récupérer l'année
        date += xmlDate.substring(0, xmlDate.indexOf("-"));

        return date;
    }

    public static String profileDateToXmlDate(String profileDate) {
        String date;
        // Récupérer l'année
        date = profileDate.substring(profileDate.lastIndexOf("/") + 1, profileDate.length());
        date += "-";
        // Récupérer  le mois
        date += profileDate.substring(profileDate.indexOf("/") + 1, profileDate.lastIndexOf("/"));
        date += "-";
        // Récupérer le jour
        date += profileDate.substring(0, profileDate.indexOf("/"));

        return date;
    }
    
    public void save(String filename) throws IOException, TransformerConfigurationException, ParserConfigurationException, TransformerException {
        
        Document profile = this.getXmlDocument();
        
        File folder = new File("data/profiles/");
        
        File f = new File("data/profiles/" + filename);
        
        // If the folder doesn't exist, we create it
        folder.mkdir();
        
        TransformerFactory transFact    = TransformerFactory.newInstance();
        Transformer transformer         = transFact.newTransformer();
        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
        Source src                      = new DOMSource(profile);
        Result dest                     = new StreamResult(f);
        transformer.transform(src, dest);
    }
    
}
