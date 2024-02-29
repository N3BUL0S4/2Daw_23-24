from db import DB
from funciones import funciones

db = DB('root', '', 'localhost', 'juancos')
db.conectar()
func = funciones(db)

def case1():
    nombre=input("Nombre: ")
    salario=int(input("Salario: "))
    numero_ventas=0
    func.nuevoEmpleado(nombre, salario, numero_ventas)
def case2():
    id=input("Id: ")
    func.incrementarVentas(id)
def case3():
    func.empledoMayorVenta()
def case4():
    func.empleados()
def case5():
    id=input("Id: ")
    func.eliminarEmpleado(id)
    

opcion = 0
while opcion != 6:
    print("\n1. Agregar empleado nuevo")
    print("2. Incrementar ventas de un empleado")
    print("3. Empleados con mayor numero de ventas")
    print("4. Mostrar empleados")
    print("5. Eliminar empleados")
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
