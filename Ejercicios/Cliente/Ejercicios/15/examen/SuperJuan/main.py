from articulo import Articulo
from service import service

def case1():
    nombre = input("Indique nombre: ")
    vegan = bool (input("¿Es producto vegano?"))
    stock = int(input("Indique cantidad: "))
    iva = int(input("Indique iva: "))
    precio = float(input("Indique precio: "))
    service.newArticulo(nombre, vegan, stock, iva, precio)

        
def case2():
    stock=input("Introduce el stock a actualizar")
    id=input("Introduce el id")
    service.newStock(id,stock)
    
def case3():
    nombre=input("Introduce el nombre")
    print(service.findAticulo(nombre))
    
def case4():
    print(service.findArtSinStock())
   
def case5():
    print("mogolico")
    # carrito:Articulo=[]
    # elec=1
    # while elec!=0:
    #     if (elec==1):
    #         id=input("Id del producto: ")
    #         cantida=input("Cantidad: ")
    #         if carrito!=None:
    #             for a in carrito:
    #                 if id==a.id:
    #                     print("Ya existe este articulo")
    #                     break;
    #         arti=service.findArticuloById(id)
    #         if arti.stock<cantida:
    #             print("Cantidad insuficiente de Stock Quedan {}".format(arti.nombre))
    #             break;
    #         arti.stock=cantida
    #         carrito.add(arti);
    #         elec=int(input("quires añadir otro articulo? Si(1) NO,pagar(0)"))
    # total=0
    # totaliva=0
    # for a in carrito:
    #     total=a.precio
    #     totaliva=a.iva
    #     print(a)
    # print("Total: {}".format(total))
    # print("Total con IVA: {}".format(total+totaliva))
    # acepta=int(input("Aceptar: Si(1) No(0)"))
    # if acepta == 1:
    #     for a in carrito:
    #         service.newStock(a.id,(a.stock)*-1)    
            
            
def menu():
    print("Menu")
    print("")
    print("1.- Agregar articulo nuevo")
    print("2.- Actualizar stock de un articulo")
    print("3.- Buscar articulo por nombre")
    print("4.- Mostar son stock")
    print("5.- Ventas de articulos")
    print("6.- Salir")
    return int(input("Que opcion elijes: "))

   
class main:
    
    db = DB('root', '', 'localhost', 'supermercado')
    db.conectar()
    service = service(db) 
    
    elec=0
    while elec != 6:
        elec=menu()
        if elec==1:
            case1()
        if elec==2:
            case2()
        if elec==3:
            case3()
        if elec==4:
            case4()
        if elec==5:
            case5()
        if elec==6:
            print("Saliendo...")
        
