/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package miniFacebook;

/**
 *
 * @author dommartj
 */
public class Test2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        DateNaissance naissancePatty = new DateNaissance(10, 05, 1968);
        Personne patty = new Personne("Bullaire", "Patty", naissancePatty);

        DateNaissance naissanceJack = new DateNaissance();
        Personne jack = new Personne("Pottes", "Jacques", naissanceJack);

        patty.setAmi(jack);
        patty.setMeilleurAmi(jack);
        
        jack.setAmi(patty);
        jack.setMeilleurAmi(patty);
        
        patty.ecritInfos();
        jack.ecritInfos();
    }
    
}
