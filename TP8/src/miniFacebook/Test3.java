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
public class Test3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Personne harry = new Personne("Potter", "Harry", new DateNaissance(23, 07, 1989));

        Personne ron = new Personne("Weasley", "Ron", new DateNaissance(24, 8, 1988));
        
        Personne hermione = new Personne("Granger", "Hermione", new DateNaissance(15, 4, 1990));
        
        harry.setAmi(ron);
        harry.setMeilleurAmi(hermione);
        
        ron.setAmi(harry);
        ron.setMeilleurAmi(hermione);
        
        hermione.setAmi(ron);
        hermione.setMeilleurAmi(harry);
        
        harry.ecritInfos();
        ron.ecritInfos();
        hermione.ecritInfos();
    }
    
}
