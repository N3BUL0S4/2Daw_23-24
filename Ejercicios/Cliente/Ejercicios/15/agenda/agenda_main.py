from db import DB
from service import Service

# Se crea una conexion a la bbdd y el service
db = DB('root', '', 'localhost', 'servidor')
db.conectar()
service = Service(db)


# Métodos con la opciones del menu que llaman al servicio
def opcion_insert():
    nombre = input("Indique nombre: ")
    apellidos = input("Indique apellidos: ")
    telefono = int(input("Indique telefono: "))
    direccion = input("Indique dirección: ")
    service.insertar_persona(nombre, apellidos, telefono, direccion)


def opcion_buscar():
    nombre = input("Indique nombre a buscar: ")
    service.buscar_persona(nombre)


def opcion_mostrar():
    service.mostrar_personas()


def opcion_eliminar():
    id = input("Indique ID de la persona a eliminar: ")
    service.eliminar_persona(id)


# MAIN

opcion = 0
while opcion != 5:
    print("\n1.Insertar persona")
    print("2.Buscar persona por nombre")
    print("3.Listar personas por nombre")
    print("4.Eliminar persona por ID")
    print("5.Salir")
    opcion = int(input("Indique una opción:  \n"))

    if opcion == 1:
        opcion_insert()
    elif opcion == 2:
        opcion_buscar()
    elif opcion == 3:
        opcion_mostrar()
    elif opcion == 4:
        opcion_eliminar()
    elif opcion == 5:
        print("Saliendo...")
        db.desconectar()
    else:
        print("Has introducido una opción incorrecta premoh")
