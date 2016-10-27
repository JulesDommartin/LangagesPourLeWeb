/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package miniFacebook;

/**
 *
 * @author dommartj
 */
public class Personne {
    
    private String nom;
    private String prenom;
    private DateNaissance dateDeNaissance;
    private Personne ami;
    private Personne meilleurAmi;

    public Personne(String nom, String prenom, DateNaissance dateDeNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
    }

    public Personne getAmi() {
        return ami;
    }

    public void setAmi(Personne ami) {
        this.ami = ami;
    }

    public Personne getMeilleurAmi() {
        return meilleurAmi;
    }

    public void setMeilleurAmi(Personne meilleurAmi) {
        this.meilleurAmi = meilleurAmi;
    }
    
    public void ecritInfos() {
        System.out.println("--------------------");
        System.out.println(this.prenom + " " + this.nom);
        System.out.print("Né(e) le : ");
        this.dateDeNaissance.ecritDate();
        System.out.println("(" + Integer.toString(this.dateDeNaissance.age()) + " ans)");
        System.out.println("Meilleur ami : "+ this.meilleurAmi.prenom + " " + this.meilleurAmi.nom);
        System.out.println("Ami : "+ this.ami.prenom + " " + this.ami.nom);
        System.out.println("--------------------");
    }
    
}
