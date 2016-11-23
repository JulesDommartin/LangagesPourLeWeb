/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import env3d.Env;
import game.Room;
import management.DevineLeMot;
import management.Dico;
import management.MenuPrincipal;

/**
 *
 * @author Jules
 */
public class TestJeu {
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Dico dico = new Dico("");
        dico.addWordToDico(1, "Fils");
        dico.addWordToDico(1, "Math");
        dico.addWordToDico(1, "Quoi");
        dico.addWordToDico(1, "Amis");
        dico.addWordToDico(1, "Flot");

        dico.addWordToDico(2, "Flute");
        dico.addWordToDico(2, "Avion");
        dico.addWordToDico(2, "Idiot");
        dico.addWordToDico(2, "Poche");

        dico.addWordToDico(3, "Exquis");
        dico.addWordToDico(3, "Patient");
        dico.addWordToDico(3, "Voiture");

        dico.addWordToDico(5, "Florilege");
        dico.addWordToDico(5, "Mecenat");
        
        DevineLeMot devineLeMot = new DevineLeMot(new Env(), new Room(), dico, "data/profiles/profile2.xml");
    }
    
}
