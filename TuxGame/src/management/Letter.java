/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package management;

import env3d.Env;
import env3d.EnvObject;

/**
 *
 * @author dommartj
 */
public class Letter extends EnvObject {
    
    private char        letter;
    private final Env   env;
    
    public Letter(char l, double x, double y, Env env) {
        this.setX(x);
        this.setY(y);
        this.setLetter(l);
        this.env = env;
    }
    
    public void setLetter(char letter) {
        if (letter == ' ') {
            //System.out.println("Impossible de créer un cube espace");
            this.setTexture("textures/letters/cube.png");
        } else {
            this.setTexture("textures/letters/" + letter + ".png");
        }
        this.setModel("textures/letters/cube.obj");
        this.letter = letter;
    }
    
    
    
}