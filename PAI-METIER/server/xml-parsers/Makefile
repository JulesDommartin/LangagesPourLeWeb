CC=g++
CFLAGS= -Wall -Wextra -std=c++11 
INCLUDEFLAGS= -I/usr/include/libxml++-2.6 -I/usr/lib/x86_64-linux-gnu/libxml++-2.6/include -I/usr/include/libxml2 -I/usr/include/glibmm-2.4 -I/usr/lib/x86_64-linux-gnu/glibmm-2.4/include -I/usr/include/glib-2.0 -I/usr/lib/x86_64-linux-gnu/glib-2.0/include -I/usr/include/sigc++-2.0 -I/usr/lib/x86_64-linux-gnu/sigc++-2.0/include -I/usr/include/curl -I/usr/include/glibmm-2.4 -I/usr/include/glib-2.0 -I/usr/include/libxml2 
ROPREFIX=../travel-optimisation
OBJS=testParsers.o LwSaxParser.o FromXMLToGoogleMapHTTPRequest.o FromGoogleMapXMLToDistanceTable.o SortVisits.o Address.o $(ROPREFIX)/affiche.o $(ROPREFIX)/initialisation.o $(ROPREFIX)/tsp.o $(ROPREFIX)/kruskal.o

LDLIBS=-L/usr/lib  -lcurl -lxml++-2.6 -lxml2 -lglibmm-2.4 -lgobject-2.0 -lglib-2.0 -lsigc-2.0 -lgobject-2.0 -lglib-2.0 -lsigc-2.0 -lxslt -lxml2

all: testParsers

testParsers: $(OBJS)
	$(CC)  $(OBJS) -o testParsers $(LDLIBS)

testParsers.o : FromXMLToGoogleMapHTTPRequest.o LwSaxParser.o testParsers.c
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) testParsers.c -o testParsers.o

LwSaxParser.o : LwSaxParser.h LwSaxParser.cpp
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) LwSaxParser.cpp -o LwSaxParser.o

FromXMLToGoogleMapHTTPRequest.o :  Address.h FromXMLToGoogleMapHTTPRequest.h FromXMLToGoogleMapHTTPRequest.cpp LwSaxParser.h LwSaxParser.cpp
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) FromXMLToGoogleMapHTTPRequest.cpp -o FromXMLToGoogleMapHTTPRequest.o

FromGoogleMapXMLToDistanceTable.o : FromGoogleMapXMLToDistanceTable.h FromGoogleMapXMLToDistanceTable.cpp LwSaxParser.h LwSaxParser.cpp
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) FromGoogleMapXMLToDistanceTable.cpp -o FromGoogleMapXMLToDistanceTable.o

SortVisits.o : SortVisits.h SortVisits.cpp Address.h
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) SortVisits.cpp -o SortVisits.o

Address.o : Address.h Address.cpp
	$(CC) -c $(CFLAGS) $(INCLUDEFLAGS) Address.cpp -o Address.o

clean:
	rm -rf *o 

realclean: clean
	rm -rf testParsers
