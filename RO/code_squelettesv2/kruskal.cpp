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


vector<Arete*> tri_selection(vector<vector<int> > &grapheInit)
{    
    int k = 0;
    unsigned int longueur = grapheInit.size();
    
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
      
        for(unsigned int i=j; i<longueur; i++)
        {
            if (aretesTriees[i]->poids > aretesTriees[maxCourant]->poids){ maxCourant = i; }
        }
        
        Arete* tmp = new Arete(aretesTriees[j]->u, aretesTriees[j]->v, aretesTriees[j]->poids);
        
        aretesTriees[j] = aretesTriees[maxCourant];

        aretesTriees[maxCourant] = tmp;
        
    }
    
    return aretesTriees;
    
}

void recConnexe(vector<vector<int> > &G, unsigned int sommetCourant, vector<int> tabSommetVisite){

    tabSommetVisite[sommetCourant] = 1;
    
    for(unsigned int i=0; i<G[sommetCourant].size(); i++){
        if( (G[sommetCourant][i] != 0) && (tabSommetVisite[i] == 0) ){
            recConnexe(G, i, tabSommetVisite);
        }
    }

    cout << "On a fini aussi ça" << endl;
           
}

bool estConnexe(vector<vector<int> > &G){
    
    vector<int> tabSommetVisite (G.size(), 0);
    bool connexe = true;

    for(unsigned int i=0; i<G.size(); i++){
        recConnexe(G, i, tabSommetVisite); 
        if (tabSommetVisite[i] == 0){
            connexe = false;
        }
    }

    cout << "On a fini ça" << endl;
    
    return connexe;
}

// Fonction kruskal: Stocke dans T un arbre couvrant de poids minimum du graphe G
// Renvoie true si G a un arbre couvrant, false sinon
bool kruskal(vector<vector<int> > &G, vector<vector<int> > &T)
{
    
	// A implementer...
    // Il est fortement recommandé de decouper le code en fonctions intermediaires. En particulier vous ferez une ou des fonctions intermediaires pour le test de connexite.
    vector<Arete*> aretesTriees;

    aretesTriees = tri_selection(G); // tri

    unsigned int taille = aretesTriees.size();
    
    cout << "On a passé le tri" << endl;

    for(unsigned int i = 0; i < G.size(); i++){
        for(unsigned int j = 0; j < G.size(); j++){
            T[i][j]=G[i][j];
        }
    }

    cout << "On est passé là" << endl;
    
    int i = 0;
    
    while(taille > T.size() - 1){
        
        T[aretesTriees[i]->u][aretesTriees[i]->v] = 0;
        
        cout << "Check" << endl;

        if (estConnexe(T)){
            taille--;
            cout << "Oui" << endl;
        }
        else{
            T[aretesTriees[i]->u][aretesTriees[i]->v] = aretesTriees[i]->poids;
            cout << "Non" << endl;
        }
        
        i++;
    }

    cout << "On va passer là" << endl;
    
    for(unsigned int i = 0; i < G.size(); i++){
        for(unsigned int j = 0; j < G.size(); j++){
            if (T[i][j]!=G[i][j]){
                return true;
            };
        }
    }
    
    return false;
}
