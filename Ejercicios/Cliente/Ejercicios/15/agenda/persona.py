class Persona:
    def __init__(self, id, nombre, apellidos, telefono, direccion):
        self.id = id
        self.nombre = nombre
        self.apellidos = apellidos
        self.telefono = telefono
        self.direccion = direccion

    def __str__(self):
        return f"ID: {self.id}, Nombre: {self.nombre}, Apellidos: {self.apellidos}, Telefono: {self.telefono}, Dirección: {self.direccion}"
