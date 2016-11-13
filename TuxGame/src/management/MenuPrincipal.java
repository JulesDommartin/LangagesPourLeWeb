/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package management;

/**
 *
 * @author Jules
 */
public class MenuPrincipal {
        
    public MenuPrincipal() {
        
    }
   
    public int demanderNiveau() {
        return LectureClavier.lireEntier("Quel niveau voulez-vous jouer ? (entrez un nombre entre 1 et 5)\n");
    } 
    
    public String demanderRejouer() {
        return LectureClavier.lireChaine("Voulez-vous rejouer ? (oui ou non)\n");
    }
    
}
