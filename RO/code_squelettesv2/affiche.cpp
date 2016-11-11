#include "affiche.h"
#include <iostream>
#include <vector>

using namespace std;

// **************** BINOME ****************
// Etudiant 1: DOMMARTIN Jules:
// Etudiant 2: JIMENEZ Pablo:

/* Fonction qui affiche la matrice d'adjacence passee en paramètre */
void afficheGraphe(vector<vector<int> > &G)
{
    cout << endl;

    cout << "Graphe considéré (taille " << G.size() << "):" << endl << endl;
    
    cout << "  ";

    for (unsigned int i=0; i<G.size(); i++){ // On a ajouté ceci et une ligne un peu plus bas pour la compréhension de l'affichage avec les sommets.
        cout << " " << i + 1;
    }

    cout << endl << endl;

    unsigned int i,j;
    for (i=0; i<G.size(); i++)
    {

        cout << i + 1 << "  ";              // cf. plus haut.

        for (j=0; j<G[0].size(); j++)
        {
            cout << G[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl;
    
}

/* Fonction qui affiche le vector d'entiers passe en parametre
 Les entrees sont toutes sur la meme ligne et sont separees par un point-virgule */
void afficheVectorInt(vector<unsigned int>  &tab)
{
    cout << endl;

    unsigned int i;
    for (i=0; i<tab.size(); i++)
    {
        
        cout << tab[i] + 1 << "; "; // On a juste modifié ceci aussi pour être cohérent avec les ajouts d'en haut.
    }
    cout << endl << endl;
    
}

/* Fonction qui affiche le vector de strings passe en parametre; une ligne par entree */
void afficheVectorString(vector<string> &tab)
{
    cout << endl;

    unsigned int i;
    for (i=0; i<tab.size(); i++)
    {
        
        cout << tab[i] << endl;
    }
    cout << endl;
    
}