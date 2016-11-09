/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import management.Dico;

/**
 *
 * @author jimenezp
 */
public class TestDico {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Dico dico = new Dico(null);
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
        
        System.out.println(dico.getWordFromListLevel(1));
        System.out.println(dico.getWordFromListLevel(2));
        System.out.println(dico.getWordFromListLevel(3));
        System.out.println(dico.getWordFromListLevel(4));
        System.out.println(dico.getWordFromListLevel(5));
        
    }
    
}
