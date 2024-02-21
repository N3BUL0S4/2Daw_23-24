from pydantic import BaseModel

class Persona():
    def __init__(self, id, nombre, apellido, telefono, direccion):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.telefono = telefono
        self.direccion = direccion

    def __str__(self):
        return f"ID: {self.id}, Nombre: {self.nombre}, Apellido: {self.apellido}, Telefono: {self.telefono}, Dirección: {self.direccion}"
