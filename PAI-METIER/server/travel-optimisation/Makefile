CC=g++
CFLAGS= -Wall -Wextra -I/opt/local/include/libxml++-2.6 -I/opt/local/lib/libxml++-2.6/include -I/opt/local/include/libxml2 -I/opt/local/include/glibmm-2.4 -I/opt/local/lib/glibmm-2.4/include -I/opt/local/include/glib-2.0 -I/opt/local/lib/glib-2.0/include -I/opt/local/include -I/opt/local/include/sigc++-2.0 -I/opt/local/lib/sigc++-2.0/include  -I/usr/include/curl -I/opt/local/include/libxml++-2.6 -I/opt/local/lib/libxml++-2.6/include -I/opt/local/include/glibmm-2.4 -I/opt/local/lib/glibmm-2.4/include -I/opt/local/include/glib-2.0 -I/opt/local/lib/glib-2.0/include -I/opt/local/include/libxml2
INCLUDEFLAGS= $(shell pkg-config --cflags libxml++-2.6) -I/usr/include/curl -I/opt/local/include/libxml++-2.6 -I/opt/local/lib/libxml++-2.6/include -I/opt/local/include/glibmm-2.4 -I/opt/local/lib/glibmm-2.4/include -I/opt/local/include/glib-2.0 -I/opt/local/lib/glib-2.0/include -I/opt/local/include/libxml2
LDLIBS=-L/opt/local/lib  -lcurl -lxml++-2.6 -lglib-2.0 -lglibmm-2.4 -lxslt -lxml2

all: testTraveller

testTraveller: main.o affiche.o initialisation.o kruskal.o tsp.o
	$(CC) main.o affiche.o initialisation.o kruskal.o tsp.o -o testTraveller $(LDLIBS)

main.o: affiche.h initialisation.h kruskal.h tsp.h main.cpp
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) main.cpp -o main.o

initialisation.o: initialisation.h initialisation.cpp
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) initialisation.cpp -o initialisation.o

kruskal.o: kruskal.h kruskal.cpp
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) kruskal.cpp -o kruskal.o

tsp.o: tsp.h tsp.cpp
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) tsp.cpp -o tsp.o

clean:
	rm -rf *o

realclean: clean
	rm -rf testTraveller
