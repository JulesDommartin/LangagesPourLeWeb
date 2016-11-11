#ifndef KRUSKAL_H
#define KRUSKAL_H

#include <vector>

using namespace std;

// **************** BINOME ****************
// Etudiant 1: DOMMARTIN Jules:
// Etudiant 2: JIMENEZ Pablo:

struct Arete;

vector<Arete*> tri(vector<vector<int> > &grapheInit);

// Fonction kruskal: Stocke dans T un arbre couvrant de poids minimum du graphe G
// Renvoie true si G a un arbre couvrant, false sinon
bool kruskal(vector<vector<int> > &G, vector<vector<int> > &T);

#endif
