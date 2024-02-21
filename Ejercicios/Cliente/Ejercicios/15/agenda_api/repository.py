# Importar el módulo del conector de MySQL
from persona import Persona


class Repository:

    def __init__(self, db):
        self.db = db

    # método para cerrar la conexión con la base de datos
    def desconectar(self):
        # Cerrar el cursor y la conexión
        self.db.cursor.close()
        self.db.conexion.close()

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
    def insertar_persona(self, nombre, apellido, telefono, direccion):
        # personas.append(Persona(nombre, apellido, telefono, direccion))
        sql = "INSERT INTO contactos (NOMBRE, APELLIDO, TELEFONO, DIRECCION) VALUES (%s, %s, %s, %s)"
        self.ejecutar(sql, (nombre, apellido, telefono, direccion))
        #despues de crearlo lo busco y devuelvo la ultima entrada de la lista que me devuelve el metodo que busca por nombre
        #el cual va a ser el recien creado ya que aunque haya personas con su nombre el ultimo va a ser el que mas id tenga
        return self.obtener_persona(nombre)[-1]

    # método delete
    def eliminar_persona(self, id):
        sql = "DELETE FROM contactos WHERE codigo = %s"
        self.ejecutar(sql, (id,))

    # método consulta por id
    def obtener_persona_por_id(self, id):
        sql = "SELECT * FROM contactos WHERE codigo = %s"
        registros = self.obtener(sql, (id,))
        persona = None
        for pr in registros:
            persona = Persona(pr[0], pr[1], pr[2], pr[3], pr[4])
        return persona

    # método consulta por nombre
    def obtener_persona(self, nombre):
        sql = "SELECT * FROM contactos WHERE nombre like %s"
        registros = self.obtener(sql, (nombre,))
        return self.convert_to_persona(registros)

    # método obtener personas ordenadas por nombre
    def obtener_personas_order_nombre(self):
        sql = "SELECT * FROM contactos order by nombre"
        registros = self.obtener(sql, ())
        return self.convert_to_persona(registros)

    def convert_to_persona(self, registros):
        personas = []
        for pr in registros:
            personas.append(Persona(pr[0], pr[1], pr[2], pr[3], pr[4]))
        return personas
