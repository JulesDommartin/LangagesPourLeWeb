/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author jimenezp
 */
public class Chien extends Mammifere {

    public Chien(String nom) {
        super(nom);
    }

    @Override
    public String cri() {
        return "Wouaf !";
    }
    
}
