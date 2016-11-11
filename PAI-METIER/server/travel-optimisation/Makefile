# **************** BINOME ****************
# Etudiant 1: DOMMARTIN Jules:
# Etudiant 2: JIMENEZ Pablo:

CC = g++
CFLAGS = -Wall -std=c++11
EXEC = TSP
HEADERS = $(wildcard *.h)
OBJECTS = $(patsubst %.cpp, %.o, $(wildcard *.cpp))

all: $(EXEC)

$(EXEC): $(OBJECTS)
	@$(CC) -o $(EXEC) $(OBJECTS)

	@echo "\nL'exécutable TSP a bien été créé : ./TSP pour le lancer.\n"

%.o: %.cpp $(HEADERS)
	@$(CC) $(CFLAGS) -o $@ -c $<

clean:
	@rm -f $(OBJECTS)

	@echo "\nLes fichiers objets ont été supprimés.\n"

cleanAll: clean
	@rm -f $(EXEC)

	@echo "L'exécutable a été supprimé.\n"


