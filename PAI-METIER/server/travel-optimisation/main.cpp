#include <iostream>
#include <vector>
#include <cstdlib>
#include "tsp.h"
#include "affiche.h"
#include "initialisation.h"
#include "kruskal.h"


using namespace std;

// **************** BINOME ****************
// Etudiant 1: DOMMARTIN Jules:
// Etudiant 2: JIMENEZ Pablo:


void test(vector<vector<int> > &G, vector<string> &adr)
{
    // A completer avec les tests de vos fonctions intermediaires que vous jugerez pertinents.
}

void test_kruskal(vector<vector<int> > &refsurGraphe)
{
    vector<vector<int> > T = vector<vector<int> > (refsurGraphe.size());
    
    for (unsigned int i = 0; i < refsurGraphe.size(); i++) {
        T[i] = vector<int> (refsurGraphe.size());
    }
    
    if (kruskal(refsurGraphe,T)){

        for (unsigned int i = 0; i < refsurGraphe.size(); i++) {
            for (unsigned int j = refsurGraphe.size() - 1; j > i; j--) {
                T[j][i]= T[i][j];
            }
        }

        cout << "Un arbre couvrant de ce graphe est: " << endl << endl;
        afficheGraphe(T);
        cout << endl;

        refsurGraphe = T;
    }
    else{
        cout << "Pas d'arbre couvrant pour ce graphe" << endl;
    }
}


int main()
{
    
    /* Apres integration dans le reste du projet, la partie RO prendra comme donnees:
     vector<string> * adresses; // contient les adresses des patients
     vector<vector<int> > * distances; // pointeur sur matrice d'adjacence du graphe
     
     Pour pouvoir tester la partie RO avant integration dans le reste du projet, on utilise des donnees artificielles choisies arbitrairement/aleatoirement:
     */
    
    int n=5; // taille pour le graphe avec n sommets
    int distance_max=9;
    vector<string> * adresses = new vector<string>(n);
    initialise_adresses(adresses);
    vector<vector<int> > * distances= new vector<vector<int> > (n);
    initialise_distances_random(distances, distance_max);
    
    
    
    /* Ici commence la partie RO. Dans cette, on va travailler avec des references sur les vectors plutot que des pointeurs sur des vector, pour faciliter l'ecriture. Il faut donc transformer les pointeurs obtenus dans le reste du projet en references. */
    
    vector<vector<int> > &refsurGraphe= (*distances);
    vector<string> &refsurAdresses = (*adresses);
    
    
    
    /* Affichages intermédiaires pour vos tests; Il faudra probablement les supprimer lors de la phase finale d'integration */
    afficheGraphe(refsurGraphe);
    cout << "Adresses contient: " << endl;
    afficheVectorString(refsurAdresses);
    
    
    /* Vous pouvez rajouter ici vos tests intermediaires.
     Dans la version finale que vous m'enverrez, "test" doit contenir des tests judicieusement choisis faisant démonstration de vos fonctions intermediaires.
     J'evaluerai votre programme AVEC puis SANS l'appel a test */
    test(refsurGraphe, refsurAdresses);
    
    /* En particulier, on fera ici un test de la fonction kruskal, et on affichera l'arbre couvrant calculé */

    test_kruskal(refsurGraphe);
    
    /* Appel à la fonction principale de TSP, resultat stocke dans ordreParcours */
    vector<int> ordreParcours = travelingSalesmanPerson(refsurGraphe, 0);
    cout << "L'ordre de parcours de la tournée est: " << endl;
    afficheVectorInt(ordreParcours);
    
    /*Appel a la fonction reordonne pour trier les adresses dans l'ordre trouve */
    reordonne(adresses, ordreParcours);
    
    /*Affichage du resultat */
    cout << "Adresses contient desormais: " << endl;
    afficheVectorString(refsurAdresses);
    
    return EXIT_SUCCESS;
    
}
