importe=int(input("Importe: "))

if importe<21:
    print(importe)
elif importe>20 and importe<101:
    print(importe-(importe*5/100))
elif importe>100:
    print(importe-(importe*10/100))
