from pydantic import BaseModel
import functions as func
from articulo import Articulo


from fastapi import FastAPI

app=FastAPI()



eleccion=-1


def comprobarId(purchaseList,id):
    if comprobarId!=None:
        for p in purchaseList:
            if p.id==id:
                return False
            
    return True


class Article_Request(BaseModel):
    nombre: str
    vegan: bool
    stock: int
    iva : int
    precio : float





@app.post("/article/insertar")
def insertNewArticle(article:Article_Request):
   return func.insertNewArticle(article)

@app.post("/update/stock")
def updateStock(id,stock):
    
    func.updateStcok(id,stock)
    
@app.get("/search/articles/name")
def searchArticleByName(nombre):
    return func.seachArticlesByName(nombre)

@app.get("/search/whitoutStock")
def case4():
    return func.searchArticleWithoutStock()

# def case5():
    
#     venta="A"
#     purchaseList=[]
#     while venta!="P":
#         id=int(input("Introduce id del articulo: "))
#         if comprobarId(purchaseList,id):
#             stock=int(input("Introduce el stock(0 o >): "))
#             aux=Articulo(id,stock)
#             if func.lookStock(aux.id,aux.stock):
                
#                 purchaseList.append(aux)
                
#         else:
#             print("Ya has introducido ese articulo")
                
#         venta=input("Deseas añadir otro articulo(A) o Pagar(P): ")
#         if venta=="P":
#                 venta=input("Estas seguro de que quieres terminar de comprar?(A) o Pagar(P): ")
#     func.saleArticles(purchaseList)         
            
            
        
        
        




        


   