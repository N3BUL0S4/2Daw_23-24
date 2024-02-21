from articulo import Articulo

class repository:
    def __init__ (self,bd):
        self.bd=bd
        
    def obtener(self, query,params):
        self.db.cursor.execute(query, params)
        return self.db.cursor.fechall();
    
    def ejecutar(self, query, params) :
        self.db.cursor.execute(query,params)
        self.db.cnx.commit()
    
    def newArticulo(self, nombre, vegan, stock, iva, precio):
        sql = "INSERT INTO articulo (nombre, vegan, stock, iva, precio) VALUES (%s, %s, %s, %s, %s)"
        self.ejecutar(sql, (nombre, vegan, stock, iva, precio))
        
    def newStock(self,id,stock):
        sql="UPDATE supermercado SET STOCK=%s WHERE ID=%s"
        self.ejecutar(sql,(stock,id))
    
    def findArticuloByName(self,nombre):
        sql="SELECT ID, NOMBRE, VEGAN, STOCK, IVA, PRECIO FROM supermercado WHERE NOMBRE=%s"
        return self.obtener(sql,nombre)

    def findArticuloById(self,id):
        sql="SELECT ID, NOMBRE, VEGAN, STOCK, IVA, PRECIO FROM supermercado WHERE ID=%s"
        return self.obtener(sql,id)
    
    def findArtSinStock(self,):
        sql="SELECT ID, NOMBRE, VEGAN, STOCK, IVA, PRECIO FROM supermercado WHERE STOCK=0"
        return self.obtener(sql)
    
         