class Empleado:
    def __init__(self,id, nombre, salario, numero_ventas):
        self.id = id
        self.nombre = nombre
        self.salario = salario
        self.numero_ventas = numero_ventas
    
    def __str__(self):
        return f"Id: {self.id} nombre: {self.nombre} salario: {self.salario} numero_ventas: {self.numero_ventas}\n"
    