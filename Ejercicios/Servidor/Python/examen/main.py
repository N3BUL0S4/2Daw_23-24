from db import DB
from service import *
from articuloDTO import Articulo

db = DB('root', '', 'localhost', 'articulos')
db.conectar()
service = Service(db)

def case1():
    nombre=input("Nombre: ")
    if  (input("Vegano? Si(s) , No(n): ").upper() == "S"):
        vegan=True
    else:
        vegan=False
    stock=int(input("Stock: "))
    iva=int(input("IVA: "))
    precio=float(input("Precio: "))      
    service.newArticulo(Articulo(nombre,vegan,stock,iva,precio))
    
def case2():
    id=int(input("Id: "))
    stock=int(input("Stock: "))
    service.newStock(stock,id)
    
def case3():
    nombre=input("Nombre: ")
    service.findByName(nombre)
    
def case4():
    service.findOutOfStock()
    
def case5():
    None
    
opcion = 0
while opcion != 5:
    print("\n1. Agregar articulo nuevo")
    print("2. Actualizar stock de un articulo")
    print("3. Buscar articulos por nombre")
    print("4. Mostrar articulo sin stock")
    print("5. Venta de articulos")
    print("6. Salir")
    opcion = int(input("Introduzca una opción: "))

    if opcion == 1:
        case1()
    elif opcion == 2:
        case2()
    elif opcion == 3:
        case3()
    elif opcion == 4:
        case4()
    elif opcion == 5:
        case5()
    elif opcion == 6:
        print("Saliendo...")
        break
    else:
        print("Opción incorrecta")

