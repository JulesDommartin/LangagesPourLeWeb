#include "tsp.h"
#include <iostream>
#include <vector>
#include <stack>
#include "kruskal.h"

using namespace std;

bool existeDeja (vector<unsigned int> &L, unsigned int sommetACheck){

	for(unsigned int i=0; i<L.size(); i++){
        /////////cout << "Sommet à check" << sommetACheck << endl;
		if(L[i] == sommetACheck){
			return true;
		}

	}

	return false;

}


void parcoursProfondeur(vector<vector<int> > &G, unsigned int sommetCourant, vector<unsigned int> &L){
    
    ////////cout << "On arrive jusque là" << endl;

    L.push_back(sommetCourant);

    //////////cout << "sommetCourant : "<< sommetCourant << endl;


    /*or(unsigned int i=0; i<L.size(); i++){
        cout << "L[" << i <<"] = "<< L[i] << endl;
    }*/

    cout << endl;

    for(unsigned int i=0; i<G[sommetCourant].size(); i++){
        if( (G[sommetCourant][i] != 0) && (!existeDeja(L, i)) ){
            //////cout << "oui" << endl;
            parcoursProfondeur(G, i, L);
        }
    }
    
}

// G: graphe pondere non oriente complet verifiant l'inegalite triangulaire
// Retourne les sommets dans l'ordre de visite d'un tour de longueur au plus 2 fois l'optimal
vector<unsigned int> travelingSalesmanPerson(vector<vector<int> > &G, int depart)
{
    vector<unsigned int> L;

    parcoursProfondeur(G, depart, L);


    return L;
}



/* Fonction reordonne: doit modifier le vector de strings pointés par adresses, pour respecter le nouvel ordre donne par le second parametre.
  Exemple: si ordre contient (3,1,2,4) et (*adresses) contient (Rue A, Rue B, Rue C, Rue D), alors après appel de la fonction, (*adresses) doit contenir (Rue C, Rue A, Rue B, Rue D) */
void reordonne(vector<string> *  adresses, vector<unsigned int> &ordre)
{
    vector<string> v = vector<string>(ordre.size());

    for(unsigned int i=0; i<ordre.size(); i++){
    	
    	v[i] = (*adresses)[ordre[i]];
    }

    for (unsigned int i=0; i < ordre.size(); i++) {
        (*adresses)[i] = v[i];
    }
 
}
 
