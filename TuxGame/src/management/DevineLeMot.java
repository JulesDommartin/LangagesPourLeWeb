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
    
    private void loadEnv() {
        this.lesLettres = new ArrayList<Letter>();
        this.env.restart();
        
        System.out.println("Load sounds");
        this.env.soundLoad("sounds/main.ogg");
        this.env.soundLoad("sounds/plop.ogg");
        this.env.soundLoop("sounds/main.ogg");
        
        this.tux = new Tux(20.0, 2.5, 30.0, Keyboard.KEY_Z, Keyboard.KEY_S, Keyboard.KEY_Q, Keyboard.KEY_D, room, env);
        this.temps = new Chronometre(40);
        initCamera();
        initMenu();
    }
    
    private void initMenu() {
        this.level = 0;
        do {
            this.level = this.menu.demanderNiveau();
        } while (this.level <= 0 || this.level > 5);
        this.setLetters(this.dico.getWordFromListLevel(this.level).toLowerCase());
        this.jouer();
    }
    
    private void rejouer() {
        String rejouer;
        do {
            rejouer = menu.demanderRejouer();
            System.out.println(rejouer);
        } while (!rejouer.toLowerCase().equals("oui") && !rejouer.toLowerCase().equals("non"));
        if (rejouer.equals("oui")) {
            this.loadEnv();
        } else {
            this.env.exit();
        }
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
    
    private void checkCollision() {
        for (Letter l : this.lesLettres) {
            if (collision(tux, l) && l.getChar() == this.lesLettres.get(this.lesLettres.size() - this.nbLettresRestantes).getChar()) {
                this.env.removeObject(l);
                this.env.soundPlay("sounds/plop.ogg");
                this.nbLettresRestantes--;
            }
        }
    }
    
    private boolean collision(Tux tux, Letter l) {
        return (tux.getX() - Tux.SCALE < l.getX() + Letter.SCALE &&
                tux.getX() + Tux.SCALE > l.getX() - Letter.SCALE)&&
                (tux.getZ() - Tux.SCALE < l.getZ() + Letter.SCALE &&
                tux.getZ() + Tux.SCALE > l.getZ() - Letter.SCALE);
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
            this.checkCollision();
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
            if (!this.temps.remainsTime()) {
                System.out.println("Le temps est épuisé");
            }
        } while (!this.exit && this.temps.remainsTime() && this.nbLettresRestantes > 0);
 
        //Post-Process: game is finished
        //we have to keep the data to save our score (chrono, temps, nbLettresRestantes) 
        this.rejouer();
        
    }
    
    
}
