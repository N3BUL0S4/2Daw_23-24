from db import DB
from funciones import funciones

db = DB('root', '', 'localhost', 'JuanMarin')
db.conectar()
func = funciones(db)

def case1():
    nombre=input("Nombre: ")
    stock=int(input("Stock: "))
    if stock>1:
        estado="onSale"
    else:
        estado="soldOut"
    ventas=int(input("Ventas: "))
    precio=float(input("Precio: "))
    func.nuevoLibro(nombre,estado,stock,ventas,precio)
    
def case2():
    id=input("ID: ")
    func.incrementarStock(id)
def case3():
    func.libroMenosStock()
def case4():
    estado=input("Estado: ")
    func.librosEstado(estado)
def case5():
    id=int(input("ID:"))
    func.venta(id)
def case6():
    id=int(input("ID:"))
    func.eliminarLibro(id)
    

option=0
while (option != 7) :
    print("\n---Menu---")
    print("1.- Nuevo Libro")
    print("2.- Incrementar Stock")
    print("3.- Libros menor numero de stock")
    print("4.- Mostrar libros por estado")
    print("5.- Realizar venta")
    print("6.- Eliminar libro")
    print("7.- Salir del programa")
    opcion=int(input("Que opcion eliges?"))
    
    if opcion==1:
        case1()
    elif opcion==2:
        case2()
    elif opcion==3:
        case3()
    elif opcion==4:
        case4()
    elif opcion==5:
        case5()
    elif opcion==6:
        case6()
    elif opcion==7:
        print("Saliendo ...")
        break;
    else:
        print("Opcion incorrecta")