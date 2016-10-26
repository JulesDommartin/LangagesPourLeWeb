/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

/**
 *
 * @author dommartj
 */
public class Segment {
    
    private Point a;
    private Point b;
    
    public Segment() {
        this.a = new Point(0.0, 0.0);
        this.b = new Point(0.0, 0.0);
    }

    public Point getA() {
        return a;
    }

    public void setA(Point a) {
        this.a = a;
    }

    public Point getB() {
        return b;
    }

    public void setB(Point b) {
        this.b = b;
    }
    
    public double getLongueur() {
        return Math.sqrt(Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2));
    }
    
}
