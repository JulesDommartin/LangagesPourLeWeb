/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package management;

import env3d.Env;
import game.Room;
import game.Tux;
import java.util.ArrayList;

/**
 *
 * @author jimenezp
 */
public class DevineLeMot {
    
    private Env                 env;
    private Tux                 tux;
    private ArrayList<Letter>   lesLettres;
    private int                 nbLettresRestantes;
    private Chronometre         temps;

    public DevineLeMot(String mot, Env env, Room room) {
        this.env = env;
        this.lesLettres = new ArrayList<Letter>();
        this.setLetters(mot);
    }
    
    private void setLetters(String mot) {
        for (int i = 0; i < mot.length(); i++) {
            this.lesLettres.add(new Letter(mot.charAt(i), i*10, i*10, this.env));
        }
    }
    
    
    
}
