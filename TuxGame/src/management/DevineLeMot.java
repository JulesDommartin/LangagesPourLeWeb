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
import org.lwjgl.input.Keyboard;

/**
 *
 * @author jimenezp
 */
public class DevineLeMot {
    
    private boolean             finished = false;
    private Room                room;
    private Env                 env;
    private Tux                 tux;
    private ArrayList<Letter>   lesLettres;
    private int                 nbLettresRestantes;
    private Chronometre         temps;

    public DevineLeMot(String mot, Env env, Room room) {
        System.out.println(mot);
        this.room = room;
        this.env = env;
        this.env.soundLoad("sounds/main.ogg");
        this.env.soundLoop("sounds/main.ogg");
        this.lesLettres = new ArrayList<Letter>();
        this.tux = new Tux(20.0, 2.5, 30.0, Keyboard.KEY_Z, Keyboard.KEY_S, Keyboard.KEY_Q, Keyboard.KEY_D, room, env);
        this.temps = new Chronometre(30);
        this.setLetters(mot.toLowerCase());
        initCamera();
    }
    
    private void setLetters(String mot) {
        System.out.println(mot);
        for (int i = 0; i < mot.length(); i++) {
            this.lesLettres.add(new Letter(mot.charAt(i), i*10 + 3, i*10 + 3, this.env));
        }
    }
    
    private void initCamera() {
        this.env.setRoom(this.room);
        // Sets up the camera
        this.env.setCameraXYZ(20, 10, 30);
        this.env.setCameraPitch(0);
        // Turn off the default controls
        this.env.setDefaultControl(false);
    }
    
    private double distance(Tux tux, Letter letter) {
        return Math.sqrt(Math.pow(tux.getX() - letter.getX(), 2) + Math.pow(tux.getZ(), letter.getZ()));
    }
    
    private boolean collision(Tux tux, Letter letter) {
        return false;
    }
    
    public void jouer() {
        // Insert Tux
        this.env.addObject(this.tux);
        // Add the letters
        for (Letter l : this.lesLettres) {
            this.env.addObject(l);
            System.out.println(l);
        }
    // Start chrono
        this.temps.start();
        // The main game loop
        do {
            if (this.env.getKey() == 1) {
                this.finished = true;
            }
            // Ask for user input, check if it collides and remove letters if necessary
            this.tux.move(env.getKeyDown(), this.env.getCameraYaw());
            // Update display
            this.env.setCameraXYZ(this.tux.getX(), 10, this.tux.getZ());
            this.env.setCameraYaw(env.getCameraYaw() + this.env.getMouseDX()*0.5);
            // Update display
            this.env.advanceOneFrame();
        } while (!this.finished);
 
        this.env.exit();
        //Post-Process: game is finished
        //we have to keep the data to save our score (chrono, temps, nbLettresRestantes) 
        
    }
    
    
}
