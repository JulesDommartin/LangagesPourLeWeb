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
public class Test {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        DateNaissance naissancePatty = new DateNaissance(10, 05, 1968);
        DateNaissance naissanceJack = new DateNaissance();

        naissancePatty.ecritDate();
        System.out.println();
        naissanceJack.ecritDate();
        System.out.println();

        System.out.println("l'âge de Jack est: " + naissanceJack.age());
    }
    
}
