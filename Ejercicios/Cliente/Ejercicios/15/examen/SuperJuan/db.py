import mysql.connector


class DB:


    # Inicializar la clase con los atributos de la configuración de la base de datos
    def __init__(self, usuario, password, host, database):
        self.usuario = usuario
        self.password = password
        self.host = host
        self.database = database

    # Método para establecer la conexión con la base de datos
    def conectar(self):
        # Conexión usando los atributos de la clase
        self.cnx = mysql.connector.connect(user=self.usuario, password=self.password,
                                           host=self.host,
                                           database=self.database)
        # Cursor para ejecutar consultas
        self.cursor = self.cnx.cursor()

    # Método para cerrar la conexión con la base de datos
    def desconectar(self):
        # Cerrar el cursor y la conexión
        self.cursor.close()
        self.cnx.close()
