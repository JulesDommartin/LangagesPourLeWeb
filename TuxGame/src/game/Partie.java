/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package game;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;


/**
 *
 * @author dommartj
 */
public class Partie {
    
    private String  date;
    private String  mot;
    private int     niveau;
    private int     trouve;
    private int     temps;

    public Partie(String date, String mot, int niveau) {
        this.date   = date;
        this.mot    = mot;
        this.niveau = niveau;
        this.trouve = 0;
        this.temps  = 0;
    }
    
    public Partie(Element domPartie) {
        this.date   = domPartie.getAttribute("date");
        this.mot    = domPartie.getElementsByTagName("word").item(0).getTextContent();
        this.niveau = Integer.parseInt(domPartie.getElementsByTagName("word").item(0).getAttributes().item(0).getTextContent());
        if (domPartie.getElementsByTagName("time").getLength() == 0) {
            this.trouve = Integer.parseInt(domPartie.getAttribute("found").replace("%", ""));
            this.temps = 0;
        } else {
            this.temps  = Integer.parseInt(domPartie.getElementsByTagName("time").item(1).getTextContent());
            this.trouve = 100;
        }
    }
    
    public Element getDomElement(Document doc) {
        Element game = doc.createElement("game");
        game.setAttribute("date", this.date);
        if (this.trouve < 100) {
            game.setAttribute("found", Integer.toString(this.trouve));
        } else {
            Element time = doc.createElement("time");
            time.setTextContent(Integer.toString(this.temps));
            game.appendChild(time);
        }
        Element word = doc.createElement("word");
        word.setAttribute("level", Integer.toString(this.niveau));
        word.setTextContent(this.mot);
        game.appendChild(word);
        return game;
    }
    
    public void setTrouve(int nbLettresRestantes) {
        this.trouve = (int)(Math.floor(this.mot.length()/(this.mot.length() - nbLettresRestantes)) * 100);
    }
    
    public void setTemps(int temps) {
        this.temps = temps;
    }
    
    public int getNiveau() {
        return this.niveau;
    }
    
    @Override
    public String toString() {
        return "Partie : \n\t- mot : " + this.mot + "\n\t- temps : " + this.temps + "\n\t- date : " + this.date + "\n\t- niveau : " + this.niveau + "\n\t- trouve : " + this.trouve;
    }
    
}
