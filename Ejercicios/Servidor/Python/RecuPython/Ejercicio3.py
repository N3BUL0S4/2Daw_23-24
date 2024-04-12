import random


pP1=0
pP2=0

while (pP1<3 and pP2<3) or (not pP1>(pP2+2) and not pP2>(pP1+2)):
    punto=random.randint(1,2)
    if punto==1:
        pP1+=1
    else:
        pP2+=1
        
    pP1Aux=0
    pP2Aux=0
    if pP1==1:
        pP1Aux= 15
    elif pP1==2:
        pP1Aux= 30
    elif pP1==3:
        pP1Aux= 40  

    if pP2==1:
        pP2Aux= 15
    elif pP2==2:
        pP2Aux= 30
    elif pP2==3:
        pP2Aux= 40
        
        
        
    if pP1>3 or pP2>3:
        print("Deuce")
        if (pP1-pP2)==1:
            if pP1>pP2:
                print("Ventaja P1")
            else:
                print("Ventaja P2") 
    else:    
        print(f"{pP1Aux} - {pP2Aux}")
    
if pP1>pP2:
    print("Jugador P1 Gana")
else:
    print("Jugador P2 Gana")
