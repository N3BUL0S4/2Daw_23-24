from repository import Repository


class Service:
    def __init__(self, db):
        self.repository = Repository(db)

    def agregar_articulo(self, nombre, vegan, stock, iva, precio):
        self.repository.agregar_articulo(nombre, vegan, stock, iva, precio)
        print("Articulo insertado correctamente !!!")

    def actualizar_stock(self, stock, id):
        self.repository.actualizar_stock(stock, id)
        print("Stock actualizado correctamente !!!!")

    def buscar_por_nombre(self, nombre):
        articulos = self.repository.buscar_por_nombre(nombre)
        if articulos:
            for art in articulos:
                print(art)
        else:
            print("No hay articulos que contengan {}".format(nombre))

    def mostrar_articulos_sin_stock(self):
        articulos_sin_stock = self.repository.mostrar_articulos_sin_stock()
        if articulos_sin_stock:
            for art in articulos_sin_stock:
                print(art)
        else:
            print("No hay articulos sin stock!!!!")

'''
    def venta_articulos:

        opt = "a"
        while (opt != "a"):
            id = input("Introduzca un id de articulo:")
            stock = input("Introduzca stock de un articulo:")
            opt = input("¿Desea añadir otro articulo(A) o pagar(P)?").lower()
'''


