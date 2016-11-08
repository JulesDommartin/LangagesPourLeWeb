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
public class Test2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args){
 
    // --
    // -- Création d'un premier point point0
    // --
     
    // 1. déclaration d'une variable de type référence
    Point point0;         
     
    // 2. instanciation
    point0 = new Point();
     
    // 3. remplissage : initialisation du premier point avec les valeurs (0,0)
    point0.x = 0.0;
    point0.y = 0.0;
 
    // --
    // Création d'un nouveau point, nommé point1, de coordonnées (2,0)
    // --
 
    Point point1 = new Point();
    point1.x = 2.0;
    point1.y = 0.0;
    
    // --
    // Création d'un nouveau point, nommé point2, de coordonnées (0,1)
    // --
 
    Point point2 = new Point();
    point2.x = 0.0;
    point2.y = 1.0;
 
    // --
    // Création du segment [point0;point1] et du segment [point0;point2]
    // --
    Segment segment1, segment2; 
    segment1 = new Segment();
    segment2 = new Segment();
 
    segment1.setA(point1);
    segment1.setB(point2);

    segment2.setA(point0);
    segment2.setB(point2);
    
    // --
    // Création d'un nouveau rectangle avec les segments segment1 et segment2
    // --
 
    Rectangle rec = new Rectangle();
    rec.s1 = segment1;
    rec.s2 = segment2;
 
    // --
    // Calcul de l'aire du rectangle
    // --
 
    // calcul de la longueur de chaque côté du rectangle
    double longueur1;
    double longueur2;
 
    longueur1 = segment1.getLongueur();
    longueur2 = segment2.getLongueur();
 
    //calcul de l'aire
    double aire;
    aire = longueur1*longueur2;
 
    // affichage du résultat dans la fenêtre de résultats
    System.out.println("Aire du rectangle :");
    System.out.println(aire);
}
    
}
