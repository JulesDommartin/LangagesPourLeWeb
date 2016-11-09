/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package game;

import env3d.Env;
import env3d.EnvObject;
import java.util.Collection;

/**
 *
 * @author dommartj
 */
public class Tux extends EnvObject {
    
    private final Room room;      // Room where the tux is moving
    private final Env env;        // Environment
    private final int KEY_UP;
    private final int KEY_DOWN;
    private final int KEY_LEFT;
    private final int KEY_RIGHT;
    
    /**
     *
     * @param x: x position
     * @param y: y position
     * @param z: z position
     * @param key_up: key to press to go up
     * @param key_down: key to press to go down
     * @param key_left: key to press to go left
     * @param key_right: key to press to go right
     * @param room: room where the tux is
     * @param env: environment where the room and tux are
     */
    public Tux(double x, double y, double z, int key_up, int key_down, int key_left, int key_right, Room room, Env env) {
        this.room       = room;
        this.env        = env;
        this.KEY_UP     = key_up;
        this.KEY_DOWN   = key_down;
        this.KEY_LEFT   = key_left;
        this.KEY_RIGHT  = key_right;
        setX(x);
        setY(y);
        setZ(z);
        setScale(3);
        setTexture("models/boxDude/ninja.png");
        setModel("models/boxDude/box-dude.obj");
    }
    
    /**
     * Move the tux to an other position in function of the key pressed
     * @param currentKey: the key wich is pressed
     */
    public void move(int currentKey) {
        double step = 1;
        //if ((currentKey == this.KEY_UP) && this.getZ() > this.getScale() && !collision(this.env.getObjects(), 1, step)) {
        if ((currentKey == this.KEY_UP) && this.getZ() > this.getScale()) {            
            this.setRotateY(180);
            this.setZ(this.getZ() - step);
        //} else if ((currentKey == this.KEY_LEFT) && this.getX() > this.getScale() && !collision(this.env.getObjects(), 2, step)) {
        } else if ((currentKey == this.KEY_LEFT) && this.getX() > this.getScale()) {
            this.setRotateY(270);
            this.setX(this.getX() - step);
        //} else if ((currentKey == this.KEY_RIGHT) && this.getX() < this.room.getWidth()- this.getScale() && !collision(this.env.getObjects(), 2, step)) {
        } else if ((currentKey == this.KEY_RIGHT) && this.getX() < this.room.getWidth()- this.getScale()) {
            this.setRotateY(90);
            this.setX(this.getX() + step);
        //} else if ((currentKey == this.KEY_DOWN) && this.getZ() < this.room.getDepth()- this.getScale() && !collision(this.env.getObjects(), 1, step)) {
        } else if ((currentKey == this.KEY_DOWN) && this.getZ() < this.room.getDepth()- this.getScale()) {
            this.setRotateY(0);
            this.setZ(this.getZ() + step);
        }
    }
    
    // NE MARCHE PAS, A REVOIR
    private boolean collision(Collection<EnvObject> lesObjets, int direction, double step) {
        for (EnvObject o : lesObjets) {
            switch(direction) {
                case 1: // UP
                    if (this.getZ() - step <= o.getZ() + step) {
                        return false;
                    } else {
                        return true;
                    }
                case 2: // LEFT + RIGHT
                    if (this.getX() - step <= o.getX() + step) {
                        return false;
                    } else {
                        return true;
                    }
                case 3: // RIGHT
                    if (this.getX() + step <= o.getX() - step) {
                        return false;
                    } else {
                        return true;
                    }
                case 4: // DOWN 
                    if (this.getY() - step <= o.getY() - step) {
                        return false;
                    } else {
                        return true;
                    }
                default:
                    return true;
            }
        }
        return true;
    }
    
}
