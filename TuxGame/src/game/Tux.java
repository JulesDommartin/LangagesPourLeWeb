/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package game;

import env3d.EnvObject;
import org.lwjgl.input.Keyboard;

/**
 *
 * @author dommartj
 */
public class Tux extends EnvObject {
    
    // Room where the tux is moving
    private Room room;
    
    public Tux(double x, double y, double z, Room room) {
        this.room = room;
        setX(x);
        setY(y);
        setZ(z);
        setScale(3);
        setTexture("models/tux/tux.png");
        setModel("models/tux/tux.obj");
    }
    
    public void move(int currentKey) {
        double step = 1;
        if ((currentKey == Keyboard.KEY_Z || currentKey == Keyboard.KEY_UP) && this.getZ() > 0) {
            this.setRotateY(180);
            this.setZ(this.getZ() - step);
        } else if ((currentKey == Keyboard.KEY_Q || currentKey == Keyboard.KEY_LEFT) && this.getX() > 0) {
            this.setRotateY(270);
            this.setX(this.getX() - step);
        } else if ((currentKey == Keyboard.KEY_D || currentKey == Keyboard.KEY_RIGHT) && this.getX() < this.room.getWidth()- 1) {
            this.setRotateY(90);
            this.setX(this.getX() + step);
        } else if ((currentKey == Keyboard.KEY_S || currentKey == Keyboard.KEY_DOWN) && this.getZ() < this.room.getDepth()- 1) {
            this.setRotateY(0);
            this.setZ(this.getZ() + step);
        }
    }
    
}
