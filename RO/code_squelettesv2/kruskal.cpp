#include "kruskal.h"
#include <vector>
#include <iostream>

using namespace std;

struct Arete
{
	Arete(int u_, int v_, int poids_) {u = u_; v = v_; poids = poids_; }
	int u, v;
	int poids;
};


vector<Arete> tri_selection(vector<vector<int> > &grapheInit)
{
    vector<Arete> aretesTriees;
    
    int k = 0, longueur = grapheInit.size();
    
    for(int i=0; i<longueur; i++)
    {
        
        for(int j=0; j<i; j++)
        {
            
            aretesTriees[k] = Arete(i, j, grapheInit[i][j]);
            k++;
            
        }
        
    }
    
    for(int j=0; j<longueur; j++)
    {

        int maxCourant = j;
        
        for(int i=j; i<longueur; i++)
        {
            if (aretesTriees[i].poids > aretesTriees[maxCourant].poids){ maxCourant = i; }
        }
        
        Arete tmp = Arete(aretesTriees[j].u, aretesTriees[j].v, aretesTriees[j].poids);
        
        aretesTriees[j] = aretesTriees[maxCourant];
        aretesTriees[maxCourant] = tmp;
        
    }
    
    return aretesTriees;
    
}

void recConnexe(vector<vector<int> > &G, int sommetCourant, vector<int> tabSommetVisite){

    tabSommetVisite[sommetCourant] = 1;
    
    for(int i=0; i<G[sommetCourant].size(); i++){
        if( (G[sommetCourant][i] != 0) && (tabSommetVisite[i] = 0) ){
            recConnexe(G, i, tabSommetVisite);
        }
    }
           
}

bool estConnexe(vector<vector<int> > &G){
    
    vector<int> tabSommetVisite (G.size(), 0);
    bool connexe = true;
    
    for(int i=0; i<G.size(); i++){
        if (tabSommetVisite[i] == 0){
            connexe = false;
        }
    }
    
    return connexe;
}

// Fonction kruskal: Stocke dans T un arbre couvrant de poids minimum du graphe G
// Renvoie true si G a un arbre couvrant, false sinon
bool kruskal(vector<vector<int> > &G, vector<vector<int> > &T)
{
    
	// A implementer...
    // Il est fortement recommandé de decouper le code en fonctions intermediaires. En particulier vous ferez une ou des fonctions intermediaires pour le test de connexite.
    vector<Arete> aretesTriees;

    aretesTriees = tri_selection(G); // tri

    int taille = aretesTriees.size();
    
    for(int i = 0; i < G.size(); i++){
        for(int j = 0; j < G.size(); j++){
            T[i][j]=G[i][j];
        }
    }

    
    int i = 0;
    
    while(taille > T.size() - 1){
        
        T[aretesTriees[i].u][aretesTriees[i].v] = 0;
        
        
        if (estConnexe(T)){
            taille--;
        }
        else{
            T[aretesTriees[i].u][aretesTriees[i].v] = aretesTriees[i].poids;
        }
        
        i++;
    }
    
    for(int i = 0; i < G.size(); i++){
        for(int j = 0; j < G.size(); j++){
            if (T[i][j]!=G[i][j]){
                return true;
            };
        }
    }
    
    return false;
}
