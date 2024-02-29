from articulo import Articulo
import bdd

def insertNewArticle(articulo):
    sql="INSERT INTO `articulo`(`nombre`, `vegan`, `stock`, `iva`, `precio`) VALUES (%s,%s,%s,%s,%s);"
    values=(articulo.nombre,articulo.vegan,articulo.stock,articulo.iva,articulo.precio)
    bdd.mycursor.execute(sql,values)
    if bdd.mydb.commit():
        print("Insertado correctamente")
    else:
        print("No se a podido insertar")

def updateStcok(id,stock):
    sql="UPDATE `articulo` SET `stock`=stock+%s WHERE id=%s;"
    values=(stock,id)
    bdd.mycursor.execute(sql,values)
    bdd.mydb.commit()    
        
    
    
def seachArticlesByName(nombre):
    
    sql="select * from articulo where nombre=%s"
    values=(nombre,)
    bdd.mycursor.execute(sql,values)
    resultado=bdd.mycursor.fetchall()
   
    if len(resultado)>0:
        return listArticles(resultado)
    return None

def searchArticleWithoutStock():
    sql="select * from articulo where stock=0"
    bdd.mycursor.execute(sql)
    resultado=bdd.mycursor.fetchall()
    
    if len(resultado)>0:
        return listArticles(resultado)
    return None


def saleArticles(purchaseList):
    if purchaseList==None:
        return None
        
    sql="UPDATE `articulo` SET stock=stock-%s WHERE id=%s;"
    for p in purchaseList:
        values=(p.stock,p.id)
        bdd.mycursor.execute(sql,values)
        bdd.mydb.commit()
        
    print("Su compra es satisfactoria")
        
def lookStock(id,stock):
    sql="select stock from articulo where id=%s"
    value=(id,)
    bdd.mycursor.execute(sql,value)
    resultado=bdd.mycursor.fetchone()
    
    resta=int(resultado[0]) - int(stock)
    if resta<0:
        print("No hay tanto stock")
        print (resultado)
        return False
    return True
    

def listArticles(resultado):
    for a in resultado:
        print(a)
        
  
  
  
  
  
def searchById(purchaseList):
    sql="select * from articulo where id=%s"
    for a in purchaseList:
        value=(a.id,)
        bdd.mycursor.execute(sql,value)
        resultado=bdd.mycursor.fetchall()
        print(resultado)
        



def comprobarStock(id,stock):
    sql="select stock from articulo where id=%s"
    value=(id,)
    bdd.mycursor.execute(sql,value)
    resultado=bdd.mycursor.fetchone()
    
    resta=int(resultado[0]) - int(stock)
    return resta      
        
# Menu

def menu():
    print("Menu")
    print("-----")
    print("1.-Agregar articulo")
    print("2.-Actualizar stock")
    print("3.-Buscar artiuclo por nombre")
    print("4.-Mostrar articulos sin stock")
    print("5.-Compra de productos")
    print("6.Salir")



