from repository import Repository


class Service:
    def __init__(self, db):
        self.repository = Repository(db)

    # Insertar persona
    def insertar_persona(self, nombre, apellidos, telefono, direccion):
        self.repository.insertar_persona(nombre, apellidos, telefono, direccion)
        print("Nueva persona agregada!!")

    # Dliminar persona por id
    def eliminar_persona(self, id):
        persona_encontrada = self.repository.obtener_persona_por_id(id)

        if persona_encontrada is not None:
            opcion = input(
                "¿Estás seguro de que quieres eliminar a {} - Si(S) o No(N)".format(persona_encontrada.nombre))
            if opcion.upper() == "S":
                self.repository.eliminar_persona(id)
                print("Persona eliminada de la agengda !!!")

        else:
            print("No existe nadie con ese id!!")

    # Buscar persona por nombre
    def buscar_persona(self, nombre):
        personas = self.repository.obtener_persona(nombre)
        if personas:
            for persona in personas:
                print(persona)
        else:
            print("No se ha encontrado a {} en la agenda !!".format(nombre))

    # Mostrar personas ordenas por nombre
    def mostrar_personas(self):
        personas = self.repository.obtener_personas_order_nombre()
        if personas:
            for persona in personas:
                print(persona)
        else:
            print("No hay personas en la agenda")
