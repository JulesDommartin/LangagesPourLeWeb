/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package management;

import env3d.Env;
import env3d.EnvObject;

public class Letter extends EnvObject {
    
    private                 char  letter;
    private final           Env   env;
    public  static final    int   SCALE = 3;
    
    public Letter(char l, double x, double y, Env env) {
        this.setX(x);
        this.setY(3);
        this.setZ(y);
        this.setScale(this.SCALE);
        this.setLetter(l);
        this.env = env;
    }
    
    public void setLetter(char letter) {
        if (letter == ' ') {
            this.setTexture("textures/letters/cube.png");
        } else {
            this.setTexture("textures/letters/" + letter + ".png");
        }
        this.setModel("textures/letters/cube.obj");
        this.letter = letter;
    }
    
    public char getChar() {
        return this.letter;
    }
    
}
