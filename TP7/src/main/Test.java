/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

/**
 *
 * @author dommartj
 */
public class Test {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // --
        // -- Création d'un premier point p1
        // --

        // 1. déclaration d'une variable de type référence
        Point p1;

        // 2. instanciation
        p1 = new Point();

        // 3. remplissage : initialisation du premier point avec les valeurs (0,0)
        p1.x = 0.0;
        p1.y = 0.0;

        // --
        // -- Création d'un deuxième point p2
        // --
        // 1. déclaration
        Point p2;

        // 2. instanciation    
        p2 = new Point();

        // 3. remplissage : initialisation du premier point avec les valeurs (5,5)
        p2.x = 5.0;
        p2.y = 5.0;
        // --
        // -- Création d'un nouvel objet s de la classe Segment
        // --
        // 1. déclaration de s
        Segment s;
        // 2. instanciation    
        s = new Segment();
        // 3. remplissage : initialisation du segment avec les points p1 et p2
        s.setA(p1);
        s.setB(p2);
        // --
        // Calcul de la longueur du segment (pythagore)
        // --
        // 1. déclaration d'une variable de type primitif
        double longueur;

        /**
         * Attention : consigne à respecter ! la formule ci-dessous ne doit pas
         * utiliser p1 et p2 dans son expression mais doit seulement s.
         */
        longueur = s.getLongueur();
        // affichage du résultat dans la fenêtre de résultats
        System.out.println("Longueur du segment :");
        System.out.println(longueur);
    }
    
}
