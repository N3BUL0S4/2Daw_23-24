class Articulo:
    def __init__(self, nombre, vegan, stock, iva, precio):
        self.id=0
        self.nombre = nombre
        self.vegan = vegan
        self.stock = stock
        self.iva = iva
        self.precio = precio

    def __init__(self, id, nombre, vegan, stock, iva, precio):
        self.id=id
        self.nombre = nombre
        self.vegan = vegan
        self.stock = stock
        self.iva = iva
        self.precio = precio
    
    def __str__(self):
        return f"ID:{self.id}, NOMBRE:{self.nombre}, VEGAN:{bool(self.vegan)}, STOCK:{self.stock}, IVA:{self.iva}, PRECIO: {self.precio}, PRECIO FINAL: {self.precio + (self.precio * self.iva) / 100}"
  
    