class Articulo:
    def __init__(self, id, nombre, vegan, stock, iva, precio) :
        self.id=id
        self.nombre=nombre
        self.vegan=vegan
        self.stock=stock
        self.iva= iva
        self.precio=precio
    
    def __str__(self):
        return f"ID: {self.id}, NOMBRE: {self.nombre}, VEGANO: {self.vegan}, STOCK: {self.stock}, IVA: {self.iva}, PRECIO: {self.precio}"    
    