from pydantic import BaseModel
import functions as func
from articulo import Articulo






eleccion=-1


def comprobarId(purchaseList,id):
    if comprobarId!=None:
        for p in purchaseList:
            if p.id==id:
                return False
            
    return True



while eleccion!=6:
    func.menu()
    eleccion=int(input("Que eleccion escoges: "))
    def case1():
        nombre=input("Introduce el nombre del nuevo producto: ")
        vegan=int(input("Vegano?(0:si,1:no): "))
        stock=int(input("Introduce el stock: "))
        iva=int(input("Introduce el iva: "))
        precio=float(input("Introduce el preci unitario: "))
        func.insertNewArticle(Articulo(0,nombre,vegan,stock,iva,precio))

    def case2():
        id=int(input("Introduce id del articulo: "))
        stock=int(input("Introduce el stock(0 o >): "))
        func.updateStcok(id,stock)
        

    def case3():
       nombre=input("Introduce el nombre del articulo que buscas: ")
       func.seachArticlesByName(nombre)

    def case4():
        func.searchArticleWithoutStock()
    
    def case5():
       
        venta="A"
        purchaseList=[]
        while venta!="P":
            id=int(input("Introduce id del articulo: "))
            if comprobarId(purchaseList,id):
                stock=int(input("Introduce el stock(0 o >): "))
                aux=Articulo(id,stock)
                if func.lookStock(aux.id,aux.stock):
                    
                    purchaseList.append(aux)
                    
            else:
                print("Ya has introducido ese articulo")
                    
            venta=input("Deseas añadir otro articulo(A) o Pagar(P): ")
            if venta=="P":
                print("")
                func.searchById(purchaseList)
                venta=input("Estas seguro de que quieres terminar de comprar?(A) o Pagar(P): ")
        func.saleArticles(purchaseList)         
                
                
            
            
            

    def default():
        print("Esa opción no está asignada")

    

    if eleccion == 1:
        case1()
    elif eleccion == 2:
        case2()
    elif eleccion == 3:
        case3()
    elif eleccion == 4:
        case4()
    elif eleccion == 5:
        case5()
    elif eleccion == 6:
        ...
    else:
        default()
        


   