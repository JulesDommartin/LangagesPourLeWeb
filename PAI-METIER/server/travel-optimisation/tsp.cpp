#include "tsp.h"
#include <iostream>
#include <vector>
#include <stack>
#include "kruskal.h"
#include "affiche.h"

using namespace std;

// **************** BINOME ****************
// Etudiant 1: DOMMARTIN Jules:
// Etudiant 2: JIMENEZ Pablo:

// Fonction prenant le tableau de parcours et vérifie si le sommet en entrée n'est pas déja dans le parcours.
bool existeDeja (vector<unsigned int> &L, unsigned int sommetACheck){

	for(unsigned int i=0; i<L.size(); i++){
		if(L[i] == sommetACheck){
			return true;
		}

	}
	return false;

}

// Fonction récursive de DFS pour parcourir les chemins dans l'arbre couvrant.
void parcoursProfondeur(vector<vector<int> > &G, unsigned int sommetCourant, vector<unsigned int> &L){

    L.push_back(sommetCourant);

    for(unsigned int i=0; i<G[sommetCourant].size(); i++){

    	// On vérifie depuis le sommet courant si il y a une arête entre lui et le sommet i
    	// et on vérifie que ce sommet n'est pas déja dans le tableau de parcours cf. la fonction au dessus.
        if( (G[sommetCourant][i] != 0) && (!existeDeja(L, i)) ){

        	// Appel récursif
            parcoursProfondeur(G, i, L);
        }
    }
    
}

// G: graphe pondere non oriente complet verifiant l'inegalite triangulaire
// Retourne les sommets dans l'ordre de visite d'un tour de longueur au plus 2 fois l'optimal
vector<unsigned int> travelingSalesmanPerson(vector<vector<int> > &G, int depart)
{
	// Tableau de parcours
    vector<unsigned int> L;

    // Tableau 2D utilisé pour recevoir l'arbre couvrant de poids min. de G donné en paramètre.
    vector<vector<int> > T = vector<vector<int> > (G.size());
    
    // On alloue la mémoire nécessaire pour ce tableau 2D.
    for (unsigned int i = 0; i < G.size(); i++) {
        T[i] = vector<int> (G.size());
    }
    
    // La fonction Kruskal renvoyant un booléen (vrai si un arbre a été trouvé, faux sinon), on décide de ce qu'on fait.
    if (kruskal(G,T)){

    	// Cas où un arbre couvrant a été trouvé :

    	// On l'affiche
        cout << "Un arbre couvrant de ce graphe est: " << endl;
        afficheGraphe(T);

        // Puis on lance un DFS avec 'T' l'arbre trouvé, 'depart' le sommet de début de parcours, et 'L' le tableau de parcours.
        parcoursProfondeur(T, depart, L);

        // On renvoit le parcours trouvé
        return L;

    }

    else{

    	// Cas où aucun arbre couvrant n'a été trouvé :

        cout << "Pas d'arbre couvrant pour ce graphe" << endl;
        return L;

    }


}



/* Fonction reordonne: doit modifier le vector de strings pointés par adresses, pour respecter le nouvel ordre donne par le second parametre.
  Exemple: si ordre contient (3,1,2,4) et (*adresses) contient (Rue A, Rue B, Rue C, Rue D), alors après appel de la fonction, (*adresses) doit contenir (Rue C, Rue A, Rue B, Rue D) */
void reordonne(vector<string> *  adresses, vector<unsigned int> &ordre)
{
    vector<string> v = vector<string>(ordre.size());

    // On copie dans 'v' les rues associées au parcours dans le bonne ordre
    for(unsigned int i=0; i<ordre.size(); i++){
    	
    	v[i] = (*adresses)[ordre[i]];
    }

    // Puis on recopie dans 'adresses'
    for (unsigned int i=0; i < ordre.size(); i++) {
        (*adresses)[i] = v[i];
    }
 
}