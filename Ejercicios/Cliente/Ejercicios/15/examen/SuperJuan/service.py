from repository import repository

class service:
    def __init__(self,db):
        self.repository = repository(db)
    
  
    def newArticulo(self, nombre, vegan, stock, iva, precio):
        self.repository.newArticulo(nombre, vegan, stock, iva, precio)
        print("Nuevo articulo introducido!!")
        
    def newStock(self,id,stock):
        repository.newStock(stock,id)
        print("Stock Actualizazdo")
    
    def findArticuloByName(self,nombre):
        return repository.findArticuloByName(nombre)
    
    def findArticuloById(self,id):
        return repository.findArticuloById(id)
    
    def findArtSinStock():
        return repository.findArtSinStock()