#include "kruskal.h"
#include <vector>
#include <iostream>

using namespace std;

// **************** BINOME ****************
// Etudiant 1: DOMMARTIN Jules:
// Etudiant 2: JIMENEZ Pablo:

struct Arete
{
    Arete(int u_, int v_, int poids_) {u = u_; v = v_; poids = poids_; }
    int u, v;
    int poids;
};


vector<Arete*> tri(vector<vector<int> > &grapheInit)
{
    unsigned int i, j;
    vector <Arete*> aretesTriees;

    for(i=0; i<grapheInit.size(); i++){
        for(j=i; j<grapheInit[i].size(); j++){
            if(grapheInit[i][j] != 0){
                Arete *tmp = new Arete(i,j,grapheInit[i][j]); // création d'une arête temporaire,
                aretesTriees.push_back(tmp);                  // puis ajout de celle ci au tableau via la méthode push_back.
            }
        }
    }

    i = 0;

    // On trie les arêtes avec la méthode du tri à bulles

    while(i < aretesTriees.size()-1){
        if(aretesTriees[i]->poids < aretesTriees[i+1]->poids){

            // inversion A à B avec variable temporaire.
            Arete *tmp = aretesTriees[i+1];        
            aretesTriees[i+1] = aretesTriees[i];    
            aretesTriees[i] = tmp;

            // si une inversion a eu lieu, on reprends du début.
            i=0;    
        }
        else{
            // s'il n'y a pas d'inversion, on avance le "début" du tri
            i++;    
        }
    }

    // On retourne le tableau trié
    return aretesTriees;

}

// Fonction récursive qui teste tous les sommets coincidents avec le celui courant
void recConnexe(vector<vector<int> > &G, unsigned int sommetCourant, vector<int> &tabSommetVisite){
    
    // On set le sommet courant à 1 pour ne pas repasser deux fois dessus
    tabSommetVisite[sommetCourant] = 1;

    for(unsigned int i=0; i<G[sommetCourant].size(); i++){
        if( (G[sommetCourant][i] != 0) && (tabSommetVisite[i] == 0) ){ // On vérifie qu'il y a une arête entre le sommet courant et le sommet i qu'on veut visiter
            // Appel récursif                                          // et on vérifie si ce sommet n'a pas déja été visité.
            recConnexe(G, i, tabSommetVisite);                        
        }
    }
    
}

bool estConnexe(vector<vector<int> > &T){
    
    // On crée un tableau de sommets visités
    // On set tous les sommets du tableau à 0 (0 = sommet non visité, 1 = sommet visité)
    vector<int> tabSommetVisite = vector<int> (T.size());
    bool connexe = true;

    // Initialisation à 0 du tableau
    for(unsigned int i=0; i<T.size(); i++){
        tabSommetVisite[i] = 0;
    }

    // On appelle la fonction récursive définie plus haut.  
    // Si un sommet du tableau est set à 0, alors on a pas visité le sommet == le graphe n'est pas connexe
    recConnexe(T, 0, tabSommetVisite);
    
    for(unsigned int i=0; i<T.size(); i++){
        if (tabSommetVisite[i] == 0){

            connexe = false;
        }
    }

    // Aucun sommet à 0 => True => graphe connexe
    return connexe;
}

// Fonction kruskal: Stocke dans T un arbre couvrant de poids minimum du graphe G
// Renvoie true si G a un arbre couvrant, false sinon
bool kruskal(vector<vector<int> > &G, vector<vector<int> > &T)
{
    // On déclare un tableau d'arrêtes
    vector<Arete*> aretesTriees;
    
    aretesTriees = tri(G); // tri

    unsigned int taille = aretesTriees.size();
    
    // On copie le graphe dans un autre graphe (pour le modifier et le tester)
    for(unsigned int i = 0; i < G.size(); i++){
        for(unsigned int j = 0; j < G.size(); j++){
            T[i][j]=G[i][j];
        }
    }
    
    int i = 0;

    // On parcourt tout le tableau
    while(taille > T.size() - 1){

        // On set l'arête à 0 (on la retire) des 2 cotés de la ligne centrale "0"
        T[aretesTriees[i]->u][aretesTriees[i]->v] = 0;
        T[aretesTriees[i]->v][aretesTriees[i]->u] = 0;

        // On test si le graphe est connexe sans l'arête enlevée précédemment
        // Oui == on valide l'opération
        // Non == On remet l'arête dans le tableau
        if (estConnexe(T)){
            taille--;
        }
        else{
            T[aretesTriees[i]->u][aretesTriees[i]->v] = aretesTriees[i]->poids;
            T[aretesTriees[i]->v][aretesTriees[i]->u] = aretesTriees[i]->poids;
        }

        i++;
    }
    
    // Si les deux graphes ne sont pas différents on renvoie false ce qui indiquera qu'il n'y a pas de arbre couvrant de poids mini.
    for(unsigned int i = 0; i < G.size(); i++){
        for(unsigned int j = 0; j < G.size(); j++){
            if (T[i][j]!=G[i][j]){
                return true;
            };
        }
    }
    
    return false;
}