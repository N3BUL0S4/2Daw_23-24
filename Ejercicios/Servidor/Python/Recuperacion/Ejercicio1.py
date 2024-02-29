vocales= ["a","e","i","o","u"]

def vocal(letra):
    if letra.lower() in vocales:
        return True
    else:
        return False 

letra=input("Introduce la letra")

vocal(letra)

