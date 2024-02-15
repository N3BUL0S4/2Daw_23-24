import random

player1=input("Nombre del player1: ")
player2=input("Nombre del player2: ")

plaS1=0
plaS2=0
plaP1=0
plaP2=0

print("Hola")
while plaS1<=1 | plaS2<=1:
    punto=random.randint(1,10)
    if punto<=5:
        plaP1+=1
        print(player1,":",plaP1,"Puntos")
    if punto>=6:
        plaP2+=1
        print(player2,":",plaP2,"Puntos")
    if plaP1>=21 | plaP2>=21 :
        if abs(plaP1-plaP2)>=2:
            if (plaP1>plaP2) :
                plaS1+=1
                print(player1,":",plaS1,"Sets")
            if (plaP2>plaP1) :
                plaS2+=1
                print(player2,":",plaS2,"Sets")
            plaP1=0
            plaP2=0   
   
if plaS1>plaS2 :
    print("Jugador {} Gana".format(player1))
    print("Por {} Sets".format(plaS1))
    
    print("Jugador {} Gana".format(player2))
    print("Por {} Sets".format(plaS2))
else:
    print("Jugador {} Gana".format(player2))
    print("Por {} Sets".format(plaS2))
    
    print("Jugador {} Gana".format(player1))
    print("Por {} Sets".format(plaS1))
    