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


vector<Arete*> tri(vector<vector<int> > &grapheInit)
{
    /*int k = 0;
    unsigned int longueur = grapheInit.size();

    cout << longueur << endl << endl;
    
    vector<Arete*> aretesTriees = vector<Arete*> (longueur * longueur);
    
    for(unsigned int i=0; i<longueur; i++)
    {
        
        for(unsigned int j=0; j<i; j++)
        {
            aretesTriees[k] = new Arete(i, j, grapheInit[i][j]);
            k++;
            
        }
        
    }
    
    for(unsigned int j=0; j<longueur; j++)
    {
        
        int maxCourant = j;
        
        for(unsigned int i=0; i<longueur; i++)
        {
            if (aretesTriees[i]->poids > aretesTriees[maxCourant]->poids){ maxCourant = i; }
        }
        
        Arete* tmp = new Arete(aretesTriees[j]->u, aretesTriees[j]->v, aretesTriees[j]->poids);
        
        aretesTriees[j] = aretesTriees[maxCourant];
        
        aretesTriees[maxCourant] = tmp;
        
    }
    
    return aretesTriees;
    */
    
    int i, j;
    vector <Arete*> aretesTriees;

    for(i=0; i<grapheInit.size(); i++){
        for(j=i; j<grapheInit[i].size(); j++){
            if(grapheInit[i][j] != 0){
                Arete *tmp = new Arete(i,j,grapheInit[i][j]);
                aretesTriees.push_back(tmp);
            }
        }
    }

    i = 0;

    while(i < aretesTriees.size()-1){
        if(aretesTriees[i]->poids < aretesTriees[i+1]->poids){

            Arete *tmp = aretesTriees[i+1];
            aretesTriees[i+1] = aretesTriees[i];
            aretesTriees[i] = tmp;

            i=0;
        }
        else{
            i++;
        }
    }

    return aretesTriees;

}

void recConnexe(vector<vector<int> > &G, unsigned int sommetCourant, vector<int> &tabSommetVisite){
    
    tabSommetVisite[sommetCourant] = 1;

    for(unsigned int i=0; i<G[sommetCourant].size(); i++){
        if( (G[sommetCourant][i] != 0) && (tabSommetVisite[i] == 0) ){
            recConnexe(G, i, tabSommetVisite);
        }
    }
    
}

bool estConnexe(vector<vector<int> > &G){
    
    vector<int> tabSommetVisite = vector<int> (G.size());
    bool connexe = true;

    for(unsigned int i=0; i<G.size(); i++){
        tabSommetVisite[i] = 0;
    }

    recConnexe(G, 0, tabSommetVisite);
    
    for(unsigned int i=0; i<G.size(); i++){
        if (tabSommetVisite[i] == 0){
            connexe = false;
        }
    }
    
    //cout << "problème ici ?" << endl;


    return connexe;
}

// Fonction kruskal: Stocke dans T un arbre couvrant de poids minimum du graphe G
// Renvoie true si G a un arbre couvrant, false sinon
bool kruskal(vector<vector<int> > &G, vector<vector<int> > &T)
{
    
    // A implementer...
    // Il est fortement recommandé de decouper le code en fonctions intermediaires. En particulier vous ferez une ou des fonctions intermediaires pour le test de connexite.
    vector<Arete*> aretesTriees;
    
    aretesTriees = tri(G); // tri
    
    unsigned int taille = aretesTriees.size();
    
    for(unsigned int i = 0; i < G.size(); i++){
        for(unsigned int j = 0; j < G.size(); j++){
            T[i][j]=G[i][j];
        }
    }
    
    int i = 0;

    while(taille > T.size() - 1){

        
        T[aretesTriees[i]->u][aretesTriees[i]->v] = 0;

        
        if (estConnexe(T)){
            taille--;
        }
        else{
            T[aretesTriees[i]->u][aretesTriees[i]->v] = aretesTriees[i]->poids;
        }

        i++;
    }
    
    for(unsigned int i = 0; i < G.size(); i++){
        for(unsigned int j = 0; j < G.size(); j++){
            if (T[i][j]!=G[i][j]){
                return true;
            };
        }
    }
    
    return false;
}
