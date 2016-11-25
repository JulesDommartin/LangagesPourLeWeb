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

void fctClient(int sockDescr){
	
}


void fctFils(int sig){
	
}


int main(int argc, char **argv){

	return 0;
}
