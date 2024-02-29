from articulo import Articulo


class Repository:
    def __init__(self, db):
        self.db = db

    def ejecutar(self, query, params):
        self.db.cursor.execute(query, params)

    def obtener(self, query, params):
        self.db.cursor.execute(query, params)
        return self.db.cursor.fetchall()

    def agregar_articulo(self, nombre, vegan, stock, iva, precio):
        sql = "INSERT INTO articulos (NOMBRE, VEGAN, STOCK, IVA, PRECIO) values (%s,%s,%s,%s,%s)"
        self.ejecutar(sql, (nombre, vegan, stock, iva, precio))
        self.db.cnx.commit()

    def actualizar_stock(self, stock, id):
        sql = "UPDATE articulos SET stock = %s where id=%s"
        self.ejecutar(sql, (stock, id))
        self.db.cnx.commit()

    def buscar_por_nombre(self, nombre):
        sql = f"SELECT * FROM articulos WHERE nombre like '%{nombre}%'"
        articulos = self.obtener(sql, ())
        return self.convert_to_articulos(articulos)

    def mostrar_articulos_sin_stock(self):
        sql = "SELECT * FROM articulos WHERE stock = 0"
        articulos = self.obtener(sql, ())
        return self.convert_to_articulos(articulos)

    def convert_to_articulos(self, articulos):
        articulos_aux = []
        for art in articulos:
            articulos_aux.append(Articulo(art[0], art[1], art[2], art[3], art[4], art[5]))
        return articulos_aux
