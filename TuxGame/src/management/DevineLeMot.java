/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package management;

import com.jme3.audio.Filter;
import env3d.Env;
import game.Room;
import game.Tux;
import java.awt.Toolkit;
import java.util.ArrayList;
import org.lwjgl.input.Keyboard;
import test.TestJeu;

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
    private int                 level;
    private Dico                dico;
    private MenuPrincipal       menu;

    public DevineLeMot(Env env, Room room, Dico dico) {
        this.room = room;
        this.env = env;
        this.level = 0;
        this.dico = dico;  
        this.menu = new MenuPrincipal();
        this.loadEnv();
    }
    
    // Load the differents parts of the environment
    private void loadEnv() {
        this.lesLettres = new ArrayList<Letter>();
        
        // restart the environment
        this.env.restart();
        
        // Loading different sounds from the "sounds" folder in order to use it later
        System.out.println("Load sounds");
        this.env.soundLoad("sounds/main.ogg");
        this.env.soundLoad("sounds/end.ogg");
        this.env.soundLoad("sounds/plop.ogg");
        
        this.env.setDefaultControl(false);
        
        // We create the tux with 
        this.tux = new Tux(20.0, 2.5, 30.0, room, env);
        
        // Initialize the timer with 40 seconds
        this.temps = new Chronometre(40);
        
        // In order to display a string at this bounds later
        // and to erase this string by passing "null" as an argument
        this.env.setDisplayStr(null, 190, 280, 2, 50, 200, 120, 1);
        
        // Initialize the camera settings 
        initCamera();
        
        // Initialize the menu of the level choice
        initMenu();
    }
    
    // Initialise the menu, ask for a level as a int
    private void initMenu() {
        this.level = 0;
        // While 
        do {
            this.level = this.menu.demanderNiveau();
        } while (this.level <= 0 || this.level > 5);
        this.setLetters(this.dico.getWordFromListLevel(this.level).toLowerCase());
        this.jouer();
    }
    
    // Ask the user if he wants to play again
    private void rejouer() {
        String rejouer;
        do {
            rejouer = menu.demanderRejouer();
        } while (!rejouer.toLowerCase().equals("oui") && !rejouer.toLowerCase().equals("non"));
        
        // If he says "yes" we call the loadEnv() method again
        // else, we quit the game
        if (rejouer.equals("oui")) {
            this.loadEnv();
        } else {
            this.env.exit();
        }
    }
    
    // Initialize the letters array with a random word passed in parameters
    private void setLetters(String mot) {
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
        // We set the number of letters at the length of the word we got
        this.nbLettresRestantes = mot.length();
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
    
    // Initialize the camera settings
    private void initCamera() {
        this.env.setRoom(this.room);
        // Sets up the camera
        this.env.setCameraXYZ(20, 10, 30);
        this.env.setCameraPitch(-15);
        // Turn off the default controls
        this.env.setDefaultControl(false);
    }
    
    // At this step of development, we had 2 choices for the collisions :
    //      - Checking if the distance minus the scale between the tux and the letter was
    //          equals to 0, but then the hitbox would be a circle
    //      - Checking if [tux.x - scale, tux.x + scale] was in [letter.x - scale, letter.x + scale]
    //          and also if [tux.z - scale, tux.z + scale] was in [letter.z - scale, letter.z + scale]
    //          in order to get more precision for the hitboxes
    // We chose the second one so we don't need this method
    private double distance(Tux tux, Letter letter) {
        return Math.sqrt((tux.getX() - letter.getX()*(tux.getX() - letter.getX())) + Math.pow(tux.getZ(), letter.getZ()));
    }
    
    // For each letter, check if there is a collision between this letter and the tux
    private void checkCollision() {
        for (Letter l : this.lesLettres) {
            if (collision(tux, l) && l.getChar() == this.lesLettres.get(this.lesLettres.size() - this.nbLettresRestantes).getChar()) {
                this.env.removeObject(l);
                this.env.soundPlay("sounds/plop.ogg");
                this.nbLettresRestantes--;
            }
        }
    }
    
    // Check the collision between the tux and a letter
    private boolean collision(Tux tux, Letter l) {
        return (tux.getX() - Tux.SCALE < l.getX() + Letter.SCALE &&
                tux.getX() + Tux.SCALE > l.getX() - Letter.SCALE)&&
                (tux.getZ() - Tux.SCALE < l.getZ() + Letter.SCALE &&
                tux.getZ() + Tux.SCALE > l.getZ() - Letter.SCALE);
    }
    
    // Return the string to display with the current advancement of the game
    private String getStringMotToDisplay() {
        String display = "";
        for (int i = 0; i < this.lesLettres.size() - this.nbLettresRestantes; i++) {
            display += this.lesLettres.get(i).getChar() + " ";
        }
        for (int i = this.lesLettres.size() - nbLettresRestantes; i < this.lesLettres.size(); i++) {
            display += "_ ";
        }
        return display.toUpperCase();
    }
    
    public void jouer() {
        // Play the sound in Loop
        this.env.soundLoop("sounds/main.ogg");
        // Insert Tux
        this.env.addObject(this.tux);
        
        // Display game infos
        this.env.setDisplayStr("Change camera : X", 20, 20);
        this.env.setDisplayStr("Restart or quit : ESC", 20, 45);

        // Add the letters 
        for (Letter l : this.lesLettres) {
            this.env.addObject(l);
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
            if (this.env.getKey() == Keyboard.KEY_C) {
                this.env.exit();
            }
            if (this.env.getKey() == 1) {
                this.exit = true;
            }
            this.checkCollision();
            // Ask for user input, check if it collides and remove letters if necessary
            this.tux.move(env.getKeyDown(), this.env.getCameraYaw());
            
            // Update display
            
            // In fonction of the viewType (that changes with the X key), set the camera position
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
            this.env.setCameraYaw(env.getCameraYaw() - this.env.getMouseDX() * 0.8);
            //System.out.println(this.env.getCameraPitch());
            // Update display
            this.env.advanceOneFrame();
            if (!this.temps.remainsTime()) {
                System.out.println("Le temps est épuisé");
            }
            this.env.setDisplayStr(this.getStringMotToDisplay(), 20, 450);
            this.env.setDisplayStr("Remaining time : " + String.valueOf(this.temps.remainingTime()), 400, 450);
        } while (!this.exit && this.temps.remainsTime() && this.nbLettresRestantes > 0);
        if (this.exit) {
            this.env.setDisplayStr("VOUS AVEZ QUITTE", 190, 280, 2, 50, 200, 120, 1);
        } else if (!this.temps.remainsTime()) {
            this.env.setDisplayStr("TEMPS ECOULE", 190, 280, 2, 50, 200, 120, 1);
        } else {
            this.env.setDisplayStr("VOUS AVEZ GAGNÉ", 190, 280, 2, 50, 200, 120, 1);
            this.env.soundStop("sounds/main.ogg");
            this.env.soundPlay("sounds/end.ogg");
        }
        this.env.advanceOneFrame();
        //Post-Process: game is finished
        //we have to keep the data to save our score (chrono, temps, nbLettresRestantes) 
        this.rejouer();
        
    }
    
    
}
