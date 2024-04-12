class libro:
    def __init__(self, id, nombre, estado,stock,ventas,precio):
        self.id=id
        self.nombre = nombre
        self.estado = estado
        self.stock = stock
        self.ventas = ventas
        self.precio =precio
    
    def __str__(self):
        return f"ID: {self.id} - NOMBRE: {self.nombre} - ESTADO: {self.estado} - STOCK: {self.stock} - VENTAS: {self.ventas} - PRECIO: {self.precio}" 