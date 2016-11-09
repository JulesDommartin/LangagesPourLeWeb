/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package game;

import env3d.Env;
import java.util.ArrayList;
import management.Letter;
import org.lwjgl.input.Keyboard;

/**
 *
 * @author dommartj
 */
public class Jeu {
    
    private Env     env;
    private boolean finished;
    private Tux     tux1;
    private Tux     tux2; // For a second player
    private ArrayList<Letter> lesLettres;
    
    public Jeu() {
        // Create the new environment.  Must be done in the same
        // method as the game loop
        lesLettres = new ArrayList<Letter>();
        env = new Env();
        // Instanciate a room 
        Room room;
        room = new Room();
        tux1 = new Tux(20.0, 2.5, 30.0, Keyboard.KEY_Z, Keyboard.KEY_S, Keyboard.KEY_Q, Keyboard.KEY_D, room, env);
        // The second player
        tux2 = new Tux(10.0, 2.5, 50.0, Keyboard.KEY_UP, Keyboard.KEY_DOWN, Keyboard.KEY_LEFT, Keyboard.KEY_RIGHT, room, env);
        env.setRoom(room);
        env.addObject(tux1);
        env.addObject(tux2);
        // Sets up the camera
        env.setCameraXYZ(50, 75, 150);
        env.setCameraPitch(-40);
        // Turn off the default controls
        env.setDefaultControl(false);
        
        createLetters();
        
        //initialize
        finished = false;
    }
    
    public void jouer() {
        // The main game loop
        finished = false;
        while (!finished) {
            //1 is for escape key
            if (env.getKey() == 1) {
                finished = true;
            }
            this.tux1.move(env.getKeyDown());
            this.tux2.move(env.getKeyDown());
            // Update display
            env.advanceOneFrame();
        }
        // Just a little clean up
        env.exit();
    }
    
    private void createLetters() {

    }
    
}
