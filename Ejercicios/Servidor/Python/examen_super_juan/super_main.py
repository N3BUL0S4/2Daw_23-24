from db import DB
from service import *

db = DB('root', '', 'localhost', 'articulos')
db.conectar()
service = Service(db)

def opcion_insertar():
    nombre = input("Introduzca un nombre de articulo:")
    if input('¿Es un vegano? (s/n): ') == 's':
        vegan = True
    else:
        vegan = False
    stock = int(input("Introduzca stock del articulo:"))
    iva = int(input("Introduzca IVA:"))
    precio = float(input("Introduzca precio del articulo:"))
    service.agregar_articulo(nombre, vegan, stock, iva, precio)
def opcion_actualizar():
    id = input("Introduzca un id de articulo:")
    stock = int(input("Introduzca nuevo stock:"))
    service.actualizar_stock(stock, id)
def opcion_buscar():
    nombre = input("Introduzca un nombre:")
    service.buscar_por_nombre(nombre)
def opcion_mostrar():
    service.mostrar_articulos_sin_stock()

#Falta por implementar
def opcion_venta():
    return None



# Main
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
        opcion_insertar()
    elif opcion == 2:
        opcion_actualizar()
    elif opcion == 3:
        opcion_buscar()
    elif opcion == 4:
        opcion_mostrar()
    elif opcion == 5:
        opcion_venta()
    elif opcion == 6:
        print("Saliendo...")
        break
    else:
        print("Has introducido una opción incorrecta")

