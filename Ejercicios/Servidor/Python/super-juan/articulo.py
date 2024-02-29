class Articulo():
   
    def __init__(self,id,nombre,vegan,stock,iva,precio):
        self.id=id
        self.nombre=nombre
        self.vegan=vegan
        self.stock=stock
        self.iva=iva
        self.precio=precio
      
    def __init__(self,id,stock):
        self.id=id
        self.stock=stock
        
      
    
    def __str__(self):
        precioWithIva=((self.precio*self.iva)/100)+self.precio
        return f"Nombre: {self.nombre}, Vegano?: {self.vegan}, Stock: {self.stock}, Precio+IVA: {precioWithIva}"
    