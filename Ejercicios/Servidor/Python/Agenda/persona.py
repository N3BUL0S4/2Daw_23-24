class Persona:
    nombre=""
    apellidos=""
    telefono=""
    direccion=""

    def __init__(self,nombre,apellidos,telefono,direccion):
        self.nombre=nombre
        self.apellidos=apellidos
        self.telefono=telefono
        self.direccion=direccion
        
    def __str__(self):
        return f"Nombre: {self.nombre} Apellidos: {self.apellidos}"