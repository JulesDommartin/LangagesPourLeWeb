#include "affiche.h"
#include <iostream>
#include <vector>

using namespace std;

/* Fonction qui affiche la matrice d'adjacence passee en paramètre */
void afficheGraphe(vector<vector<int> > &G)
{
    cout << "Graphe considéré (taille " << G.size() << "):" << endl << endl;
    
    cout << "   1 2 3 4 5" << endl << endl;

    unsigned int i,j;
    for (i=0; i<G.size(); i++)
    {

        cout << i+1 << "  ";
        for (j=0; j<G[0].size(); j++)
        {
            cout << G[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl << endl;
    
}

/* Fonction qui affiche le vector d'entiers passe en parametre
 Les entrees sont toutes sur la meme ligne et sont separees par un point-virgule */
void afficheVectorInt(vector<unsigned int>  &tab)
{
    
    unsigned int i;
    for (i=0; i<tab.size(); i++)
    {
        
        cout << tab[i] << "; ";
    }
    cout << endl << endl;
    
}

/* Fonction qui affiche le vector de strings passe en parametre; une ligne par entree */
void afficheVectorString(vector<string> &tab)
{
    
    unsigned int i;
    for (i=0; i<tab.size(); i++)
    {
        
        cout << tab[i] << endl;
    }
    cout << endl;
    
}
