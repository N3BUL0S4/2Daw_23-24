from articuloDTO import Articulo 

class Repository:
    def  __init__(self,db):
        self.db = db
        
    def ejecutar(self, sql, params):
        self.db.cursor.execute(sql, params)
        
    def obtener(self, sql, params):
        self.db.cursor.execute(sql, params)  
        return self.db.cursor.fetchall()
    
    def newArticulo(self,articulo):
        sql="INSERT INTO articulos(nombre, vegan, stock, iva, precio) VALUES (%s, %s, %s,%s,%s)"
        self.ejecutar(sql,(articulo.nombre, articulo.vegan, articulo.stock,articulo.iva,articulo.precio))
        self.db.cnx.commit()
        
    def newStock(self,stock,id):
        sql="UPDATE articulos SET stock=%s where id = %s"
        self.ejecutar(sql,(stock,id))
        self.db.cnx.commit()
    
    def findByName(self,nombre):
        sql = f"SELECT * FROM articulos WHERE nombre like '%{nombre}%'"
        articulos = self.obtener(sql, ())
        return self.conbert_articulo(articulos)
    
    def findOutStock(self):
        sql="SELECT * FROM articulos WHERE stock = 0"
        articulos = self.obtener(sql, ())
        return self.conbert_articulo(articulos)
    
    def conbert_articulo(self,articulos):
        articulos_aux = []
        for art in articulos:
            articulos_aux.append(Articulo(art[0], art[1], art[2], art[3], art[4], art[5]))
        return articulos_aux