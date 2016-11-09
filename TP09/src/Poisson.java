/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author jimenezp
 */
public class Poisson extends Animal {

    public Poisson(String nom) {
        super(nom);
    }

    @Override
    public String cri() {
        return "Gloup !";
    }
    
    @Override
    public String toString() {
        return "Je suis un poisson, j'aime les algues, j'aimes les aaaaalgues, je m'appelle " + this.nom + " et je fais ce genre de bruit mamen : " + this.cri(); 
    }
}
