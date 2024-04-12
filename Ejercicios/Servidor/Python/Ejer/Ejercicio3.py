import random

pP1=0
pP2=0

while (pP1<4 and pP2<4) and (pP1>=pP2+2 or pP2>=pP1+2):
    punto=random.randint(1,2)
    if 1==int(punto):
        pP1+=1
    else:
        pP2+=1
    if pP1>3 or pP2>3:
        if (pP1-pP2)==0:
            print("Deuce")        
        if (pP1-pP2)*1==1:
            if pP1>pP2:
                print("Ventaja P1")
            else:
                print("Ventaja P2")
    else:
        print(f"{pP1} - {pP2}")

if (pP1>pP2):
    print ("Ganador P1")
else:
    print ("Ganador P2")        