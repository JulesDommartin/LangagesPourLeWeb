/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import env3d.Env;
import game.Room;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.parsers.ParserConfigurationException;
import management.DevineLeMot;
import management.Dico;
import management.MenuPrincipal;

/**
 *
 * @author Jules
 */
public class TestJeu {
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Dico dico = new Dico("data/dico/dico.xml");
        
        try {
            DevineLeMot devineLeMot = new DevineLeMot(new Env(), new Room(), dico, "data/profiles/profile2.xml");
            
            // To play without profile.xml 
            //DevineLeMot devineLeMot = new DevineLeMot(new Env(), new Room(), dico);
        } catch (IOException ex) {
            Logger.getLogger(TestJeu.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ParserConfigurationException ex) {
            Logger.getLogger(TestJeu.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
}
