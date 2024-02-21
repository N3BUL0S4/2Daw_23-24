# Importar el módulo del conector de MySQL
from persona import Persona


class Repository:

    def __init__(self, db):
        self.db = db

    # método para ejecutar una consulta y devolver los resultados
    def obtener(self, query, params):
        # Ejecutar la consulta usando el cursor
        self.db.cursor.execute(query, params)
        # Obtener los resultados de la consulta
        return self.db.cursor.fetchall()

    # método para ejecutar una consulta
    def ejecutar(self, query, params):
        # Ejecutar la consulta usando el cursor
        self.db.cursor.execute(query, params)
        self.db.cnx.commit()

    # método creación insert
    def insertar_persona(self, nombre, apellidos, telefono, direccion):
        # personas.append(Persona(nombre, apellidos, telefono, direccion))
        sql = "INSERT INTO persona (NOMBRE, APELLIDOS, TELEFONO, DIRECCION) VALUES (%s, %s, %s, %s)"
        self.ejecutar(sql, (nombre, apellidos, telefono, direccion))

    # método delete
    def eliminar_persona(self, id):
        sql = "DELETE FROM persona WHERE id = %s"
        self.ejecutar(sql, (id,))

    # método consulta por id
    def obtener_persona_por_id(self, id):
        sql = "SELECT * FROM persona WHERE id = %s"
        registros = self.obtener(sql, (id,))
        persona = None
        for pr in registros:
            persona = Persona(pr[0], pr[1], pr[2], pr[3], pr[4])
        return persona

    # método consulta por nombre
    def obtener_persona(self, nombre):
        sql = "SELECT * FROM persona WHERE nombre like %s"
        registros = self.obtener(sql, (nombre,))
        return self.convert_to_persona(registros)

    # método obtener personas ordenadas por nombre
    def obtener_personas_order_nombre(self):
        sql = "SELECT * FROM persona order by nombre"
        registros = self.obtener(sql, ())
        return self.convert_to_persona(registros)

    def convert_to_persona(self, registros):
        personas = []
        for pr in registros:
            personas.append(Persona(pr[0], pr[1], pr[2], pr[3], pr[4]))
        return personas
