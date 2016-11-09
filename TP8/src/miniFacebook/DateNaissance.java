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
public class DateNaissance {
    
    private int jour;
    private int mois;
    private int annee;
    
    public DateNaissance() {
        this.jour = 23;
        this.mois = 6;
        this.annee = 1912;
    }

    public DateNaissance(int jour, int mois, int annee) {
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }

    public int getJour() {
        return jour;
    }

    public void setJour(int jour) {
        boolean bissextile = ((this.annee % 4 == 0 && this.annee % 100 != 0) || (this.annee % 4 == 0 && this.annee % 100 == 0 && this.annee % 400 == 0));
        switch (this.mois) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (jour >= 1 && jour <= 31) {
                    this.jour = jour;
                } else {
                    System.out.println("Impossible de modifier le jour.");
                }   
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (jour >= 1 && jour <= 30) {
                    this.jour = jour;
                } else {
                    System.out.println("Impossible de modifier le jour.");
                }
                break;
            case 2  :
                if ((bissextile && (jour >= 1 && jour <= 29)) || (!bissextile && (jour >= 1 && jour <= 28))) {
                    this.jour = jour;
                } else {
                    System.out.println("Impossible de modifier le jour.");
                }            
            default:
                System.out.println("Impossible de modifier le jour.");
                break;
        }
    }

    public int getMois() {
        return mois;
    }

    public void setMois(int mois) {
        if (mois >= 1 && mois <= 12) {
            this.mois = mois;
        } else {
            System.out.println("Impossible de modifier le mois.");
        }
    }

    public int getAnnee() {
        return annee;
    }

    public void setAnnee(int annee) {
        if (annee <= this.annee || annee <= 2016) {
            this.annee = annee;
        } else {
            System.out.println("Impossible de modifier l'année.");
        }
    }
    
    public void ecritDate() {
        String s = Integer.toString(this.jour) + "/" + Integer.toString(this.mois) + "/" + Integer.toString(this.annee);
        System.out.print(s);
    }
    
    // L'annee de référence chez nous sera 2016 (et non pas 2015)
    public int age() {
        return 2016 - this.annee;
    }
    
}
