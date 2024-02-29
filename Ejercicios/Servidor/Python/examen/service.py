from repository import Repository

class Service:
    def __init__(self, db):
      self.repository = Repository(db)
      
    def newArticulo(self, articulo):
        self.repository.newArticulo(articulo)
        print("Articulo insertado correctamente !!!")
    
    def newStock(self, stock,id):
        self.repository.newStock(stock,id)
        print("Stock insertado")

    def findByName(self, nombre):
        articulos = self.repository.findByName(nombre)
        if articulos:
            for a in articulos:
                print (a)
        else :
            print ("No hay articulos con el nombre: " + nombre)
    
    def findOutOfStock(self):
        articulos = self.repository.findOutStock()
        if articulos:
            for a in articulos:
                print(a)
        else:
            print("No hay articulos sin stock")