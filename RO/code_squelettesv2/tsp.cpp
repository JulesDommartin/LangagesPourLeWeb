#include "tsp.h"
#include <iostream>
#include <vector>
#include <stack>
#include "kruskal.h"

using namespace std;

bool existeDeja (vector<unsigned int> &L, unsigned int sommetACheck){

	for(unsigned int i=0; i<L.size(); i++){

		if(L[i] == sommetACheck){
			return true;
		}

	}

	return false;

}

void parcoursProfondeur(vector<vector<int> > &G, unsigned int sommetCourant, vector<unsigned int> &L, unsigned int ordre){
    
    L[ordre] = sommetCourant;

    ordre++;

    for(unsigned int i=0; i<G.size(); i++){
        cout << "L[" << i <<"] = "<< L[i] << endl;
    }

    cout << endl;

    for(unsigned int i=0; i<G[sommetCourant].size(); i++){
        if( (G[sommetCourant][i] != 0) && (L[i] == 0) && (existeDeja(L, i) == false) ){
            parcoursProfondeur(G, i, L, ordre);
        }
    }
    
}

// G: graphe pondere non oriente complet verifiant l'inegalite triangulaire
// Retourne les sommets dans l'ordre de visite d'un tour de longueur au plus 2 fois l'optimal
vector<unsigned int> travelingSalesmanPerson(vector<vector<int> > &G, int depart)
{
    vector<unsigned int> L = vector<unsigned int> (G.size());

    unsigned int * ordre = 0;

    for(unsigned int i=0; i<G.size(); i++){
        L[i] = 0;
    }


    parcoursProfondeur(G, depart, L, *(ordre));

    return L;
}



/* Fonction reordonne: doit modifier le vector de strings pointés par adresses, pour respecter le nouvel ordre donne par le second parametre.
  Exemple: si ordre contient (3,1,2,4) et (*adresses) contient (Rue A, Rue B, Rue C, Rue D), alors après appel de la fonction, (*adresses) doit contenir (Rue C, Rue A, Rue B, Rue D) */
void reordonne(vector<string> *  adresses, vector<unsigned int> &ordre)
{

    for(unsigned int i=0; i<ordre.size(); i++){
    	
    	string tmp;

    	tmp = (*adresses)[i];
    	(*adresses)[i] = (*adresses)[ordre[i]];
    	(*adresses)[ordre[i]] = tmp;
    }
 
}
 
