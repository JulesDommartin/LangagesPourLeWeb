#ifndef KRUSKAL_H
#define KRUSKAL_H

#include <vector>

using namespace std;

struct Arete;


vector<Arete> tri_selection(vector<vector<int> > &grapheInit , vector<Arete> &aretesTriees);

// Fonction kruskal: Stocke dans T un arbre couvrant de poids minimum du graphe G
// Renvoie true si G a un arbre couvrant, false sinon
bool kruskal(vector<vector<int> > &G, vector<vector<int> > &T);

#endif
