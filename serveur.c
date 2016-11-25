#ifdef WIN32 // Windows

	#include <stdio.h>
	#include <stdlib.h>
	#include <signal.h>
	#include <errno.h>

	#include <winsock2.h>

#elif defined (linux) // Linux

	#include <stdio.h>
	#include <stdlib.h>
	#include <signal.h>
	#include <errno.h>

	#include <sys/types.h>
	#include <sys/socket.h>
	#include <netinet/in.h>
	#include <arpa/inet.h>
	#include <unistd.h>
	#include <netdb.h>

	#define INVALID_SOCKET -1
	#define SOCKET_ERROR -1
	#define closesocket(s) close(s)

	typedef int SOCKET;
	typedef struct sockaddr_in SOCKADDR_IN;
	typedef struct sockaddr SOCKADDR;
	typedef struct in_addr IN_ADDR;

#else // Plateforme non supportée

	#error not defined for this platform

#endif

/*
struct hostent{ 
	char 		*h_name;        // nom de la machine
        char		**h_aliases;    // liste d'aliases
        int 		h_addrtype;     // AF_INET
        int 		h_length;       // longueur de l'adresse (4 octets)
        char 		**h_addr_list;  // liste d'adresses
};

struct in_addr {
   	in_addr_t	s_addr;
};

struct sockaddr_in{ 
	short 		sin_family;   	// lui donner la valeur AF_INET
        u_short 	sin_port;   	// numéro de port
        struct in_addr 	sin_addr;	// adresse de la machine
        char 		sin_zero[8];  	// champ rempli de 0
};

struct sockaddr {
	unsigned char   sa_len;         // longueur totale
	sa_family_t     sa_family;      // famille d'adresse
	char            sa_data[14];    // valeur de l'adresse
};
*/

void fctServeur(int sockDescr){

	// Fonction qui lit dans la socket une chaine de caractères et l'affiche à l'écran comme une chaine de caractères.
}

void fctFils(int sig){

	// Handler pour la réception de SIGCHILD	
}

int main(int argc, char **argv){
	
	struct sockaddr_in serveur_AD, client_AD;

	// Création du socket

	SOCKET sock = socket(AF_INET, SOCK_DGRAM, 0);

	if(sock == INVALID_SOCKET){
		perror("socket()");
		exit(errno);
	}

	// Création de l'interface

	SOCKADDR_IN sin = { 0 };

	sin.sin_addr.s_addr = htonl(INADDR_ANY);

	sin.sin_family = AF_INET;

	sin.sin_port = htons(PORT);

	if(bind (sock, (SOCKADDR *) &sin, sizeof sin) == SOCKET_ERROR){
		perror("bind()");
		exit(errno);
	}

	// Ecoute et connexion des clients

	if(listen(sock, 5) == SOCKET_ERROR){
		perror("listen()");
		exit(errno);
	}

	SOCKET sock;

	SOCKADDR_IN csin =Fermeture du socket { 0 };
	SOCKET csock;

	int sinsize = sizeof csin;

	csock = accept(sock, (SOCKADDR *)&csin, &sinsize);

	if(csock == INVALID_SOCKET)
	{
		perror("accept()");
		exit(errno);
	}

	// Fermeture du socket

	SOCKET sock;

	closesocket(sock);

	return 0;
}
