/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package game;

public class Room {
    
    private int depth;
    private int height;
    private int width;
    private String textureBottom;
    private String textureNorth;
    private String textureEast;
    private String textureWest;
    private String textureTop;
    private String textureSouth;
    
    public Room() {
        this.depth          = 200;
        this.height         = 100;
        this.width          = 200;
        this.textureBottom  = "textures/damier.jpg";
        this.textureNorth   = "textures/top.png";
        this.textureEast    = "textures/top.png";
        this.textureWest    = "textures/top.png";
    }

    public int getDepth() {
        return depth;
    }

    public void setDepth(int depth) {
        this.depth = depth;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getTextureBottom() {
        return textureBottom;
    }

    public void setTextureBottom(String textureBottom) {
        this.textureBottom = textureBottom;
    }

    public String getTextureNorth() {
        return textureNorth;
    }

    public void setTextureNorth(String textureNorth) {
        this.textureNorth = textureNorth;
    }

    public String getTextureEast() {
        return textureEast;
    }

    public void setTextureEast(String textureEast) {
        this.textureEast = textureEast;
    }

    public String getTextureWest() {
        return textureWest;
    }

    public void setTextureWest(String textureWest) {
        this.textureWest = textureWest;
    }

    public String getTextureTop() {
        return textureTop;
    }

    public void setTextureTop(String textureTop) {
        this.textureTop = textureTop;
    }

    public String getTextureSouth() {
        return textureSouth;
    }

    public void setTextureSouth(String textureSouth) {
        this.textureSouth = textureSouth;
    }
    
    
    
}
