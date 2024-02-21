from repository import Repository


class Service:
    def __init__(self, DB):
        self.repository = Repository(DB)

    # Insertar persona
    def insertar_persona(self, nombre, apellido, telefono, direccion):
        return self.repository.insertar_persona(nombre, apellido, telefono, direccion)

    # Eliminar persona por id
    def eliminar_persona(self, id):
        self.repository.eliminar_persona(id)

    # Buscar persona por nombre
    def buscar_persona(self, nombre):
        return self.repository.obtener_persona(nombre)

    # Mostrar personas ordenas por nombre
    def mostrar_personas(self):
        return self.repository.obtener_personas_order_nombre()