#ifndef AFFICHE_H
#define AFFICHE_H

#include <iostream>
#include <vector>

using namespace std;

// **************** BINOME ****************
// Etudiant 1: DOMMARTIN Jules:
// Etudiant 2: JIMENEZ Pablo:

/* Fonction qui affiche la matrice d'adjacence passee en paramètre */
void afficheGraphe(vector<vector<int> > &G);

/* Fonction qui affiche le vector d'entiers passe en parametre
 Les entrees sont toutes sur la meme ligne et sont separees par un point-virgule */
void afficheVectorInt(vector<unsigned int>  &tab);

/* Fonction qui affiche le vector de strings passe en parametre; une ligne par entree */
void afficheVectorString(vector<string> &tab);


#endif