/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package management;

import java.util.ArrayList;

/**
 *
 * @author jimenezp
 */
public class Dico {
    
    private final int           NB_NIVEAUX = 5;
    private ArrayList<String>[] listLevels;
    private String              pathToDicoFile;

    public Dico(String pathToDicoFile) {
        this.pathToDicoFile = pathToDicoFile;
        this.createLevelArrays();
    }

    public String getPathToDicoFile() {
        return pathToDicoFile;
    }
    
    public void createLevelArrays() {
        this.listLevels = new ArrayList[this.NB_NIVEAUX];
        for (int i = 0; i < this.NB_NIVEAUX; i++) 
            this.listLevels[i] = new ArrayList<String>();
    }
    
    public String getWordFromListLevel(int level) {
        if (listLevels[level - 1].size() == 0) {
            return null;
        }
        return listLevels[level - 1].get((int)Math.floor(Math.random() * listLevels[level - 1].size()));
    }
    
    public void addWordToDico(int level, String word) {
        this.listLevels[level - 1].add(word);
    }
   
}
