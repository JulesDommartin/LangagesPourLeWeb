CC = g++
CFLAGS = -Wall
EXEC = TSP
HEADERS = $(wildcard *.h)
OBJECTS = $(patsubst %.cpp, %.o, $(wildcard *.cpp))

all: $(EXEC)

$(EXEC): $(OBJECTS)
	$(CC) -o $(EXEC) $(OBJECTS)

%.o: %.cpp $(HEADERS)
	$(CC) $(CFLAGS) -o $@ -c $<

clean:
	rm -f $(OBJECTS)

mrproper: clean
	rm -f $(EXEC)
