/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author jimenezp
 */
public abstract class Mammifere extends Animal {

    public Mammifere(String nom) {
        super(nom);
    }
    
    @Override
    public String toString() {
        return "Je suis un mammifère, je m'appelle " + this.nom + " et je peux faire: " + this.cri(); 
    }
    
}
