#ifndef INITIALISATION_H
#define INITIALISATION_H

#include <iostream>
#include <vector>


using namespace std;


/* Ce module sert a creer des donnees artificielles pour les tests de la partie RO.
 Apres integration dans le reste du projet, les veritables donnees à utiliser seront precedemment calculees */


/* Fonction qui initialise le vector de string pointé par le pointeur adresse.
 La premiere entree contiendra "Rue A", la deuxième "Rue B", etc..
 Si la taille du vector est plus longue que 26, on complete le reste avec "Rue inconnue" */
void initialise_adresses(vector<string> * adresses);


/* Fonction qui initialise la matrice d'adjacence pointée par distance.
 La distance entre i et j est 0 si i=j, et un nombre aléatoire entre 1 et distance_max sinon.
 La matrice renvoyee est bien symetrique. */
void initialise_distances_random(vector<vector<int> > * distances, int distance_max);

#endif