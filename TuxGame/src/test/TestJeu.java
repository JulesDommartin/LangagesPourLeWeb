/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import env3d.Env;
import game.Room;
import management.DevineLeMot;

/**
 *
 * @author Jules
 */
public class TestJeu {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String mot = "Test";
        DevineLeMot devineLeMot = new DevineLeMot(mot, new Env(), new Room());
        devineLeMot.jouer();
    }
    
}
