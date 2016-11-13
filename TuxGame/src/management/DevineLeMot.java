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
    
    private boolean             exit        = false;
    private boolean             finished    = false;
    private Room                room;
    private Env                 env;
    private Tux                 tux;
    private ArrayList<Letter>   lesLettres;
    private int                 nbLettresRestantes;
    private Chronometre         temps;
    private int                 viewType    = 1;

    public DevineLeMot(String mot, Env env, Room room) {
        System.out.println(mot);
        this.room = room;
        this.env = env;
        this.env.soundLoad("sounds/main.ogg");
        this.env.soundLoop("sounds/main.ogg");
        this.lesLettres = new ArrayList<Letter>();
        this.tux = new Tux(20.0, 2.5, 30.0, Keyboard.KEY_Z, Keyboard.KEY_S, Keyboard.KEY_Q, Keyboard.KEY_D, room, env);
        this.temps = new Chronometre(10);
        this.setLetters(mot.toLowerCase());
        initCamera();
    }
    
    private void setLetters(String mot) {
        System.out.println(mot);
        for (int i = 0; i < mot.length(); i++) {
            double x = (Math.random() * (this.room.getWidth() - Letter.SCALE)) + Letter.SCALE;
            double z = (Math.random() * (this.room.getDepth() - Letter.SCALE)) + Letter.SCALE;
            // if randoms number are going to make a bad placement letter :
            //     do the randoms number again == (i--)
            if (checkLetterPosition(x, z)) {
                this.lesLettres.add(new Letter(mot.charAt(i), x, z, this.env));
            } else {
                i--;
            }
        }
    }
    
    // Check letter position : if randoms number x & z are going to make a letter
    // wich has a center in an other letter, return false
    private boolean checkLetterPosition(double x, double z) {
        for (int i = 0; i < this.lesLettres.size(); i++) {
            if (
                    this.lesLettres.get(i).getX() - Letter.SCALE >= x + Letter.SCALE 
                    && this.lesLettres.get(i).getX() + Letter.SCALE <= x - Letter.SCALE
                    &&
                    this.lesLettres.get(i).getZ() - Letter.SCALE >= z + Letter.SCALE
                    && this.lesLettres.get(i).getZ() + Letter.SCALE <= z - Letter.SCALE
                    )
                return false;
        }
        return true;
    }
    
    private void initCamera() {
        this.env.setRoom(this.room);
        // Sets up the camera
        this.env.setCameraXYZ(20, 10, 30);
        this.env.setCameraPitch(-15);
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
            if (this.env.getKey() == Keyboard.KEY_X) {
                this.viewType++;
                if (this.viewType % 2 == 1) {
                    this.env.setCameraPitch(-15);
                } else {
                    this.env.setCameraPitch(0);
                }
            }
            if (this.env.getKey() == 1) {
                this.exit = true;
            }
            // Ask for user input, check if it collides and remove letters if necessary
            this.tux.move(env.getKeyDown(), this.env.getCameraYaw());
            // Update display
            if (this.viewType % 2 == 1) {
                this.env.setCameraXYZ(
                        this.tux.getX() + (float) Math.sin(Math.toRadians(this.env.getCameraYaw())) * 30,
                        15,
                        this.tux.getZ() + (float) Math.cos(Math.toRadians(this.env.getCameraYaw())) * 30
                );  
            } else if (this.viewType % 2 == 0) {
                this.env.setCameraXYZ(
                        this.tux.getX(),
                        8,
                        this.tux.getZ()
                );
            }
            this.env.setCameraYaw(env.getCameraYaw() - this.env.getMouseDX());
            //System.out.println(this.env.getCameraPitch());
            // Update display
            this.env.advanceOneFrame();
        } while (!this.exit && this.temps.remainsTime() && !this.finished);
 
        this.env.exit();
        //Post-Process: game is finished
        //we have to keep the data to save our score (chrono, temps, nbLettresRestantes) 
        
    }
    
    
}
