from libro import libro

class funciones:
    
    def __init__(self,db):
        self.db=db
        
    def obtener(self,sql,params):
        self.db.cursor.execute(sql,params)
        return self.db.cursor.fetchall()
        
    def ejecutar(self,sql,params):
        self.db.cursor.execute(sql,params)
    
    def nuevoLibro(self,nombre,estado,stock,ventas,precio):
        sql="INSERT INTO libros (nombre,estado,stock,ventas,precio) VALUES(%s,%s,%s,%s,%s)"
        self.ejecutar(sql,(nombre,estado,stock,ventas,precio))
        self.db.cnx.commit()
        print("Libro creado correctamente")
    
    def incrementarStock(self,id):
        sql=f"SELECT * FROM libros WHERE id = {id}"
        libros=self.obtener(sql,())
        libros=self.convert_libros(libros)
        if libros:
            cantidad=input("Cuanta cantidad desea incrementar")
            sql=f"UPDATE libros SET stock = stock + {cantidad} WHERE id = {id} "
            self.ejecutar(sql,())
            self.db.cnx.commit()
        else:
            print("El libro no existe")
    
    def libroMenosStock(self):
        sql="SELECT MIN(stock) FROM libros"
        libros=self.obtener(sql,())
        num=libros[0][0]
        if num != None:
            
            sql=f"SELECT * FROM libros where stock={num}"
            libros=self.obtener(sql,())
            libros=self.convert_libros(libros)
            for l in libros :
                print(l)
        else:
            print("No hay libros")
    
    def librosEstado(self,estado):
        sql=f"SELECT * FROM libros WHERE estado LIKE '{estado}'"
        libros=self.obtener(sql,())
        libros=self.convert_libros(libros)
        if libros: 
            for l in libros :
                print(l)
        else:
            print("No hay libro")

    def venta(self, id):
        sql=f"SELECT * FROM libros WHERE id = {id}"
        libros=self.obtener(sql,())
        libros=self.convert_libros(libros)
        if libros:
            for l in libros:
                print(l)
            if (input("Quieres realizar la venta? SI(s) NO(n)")).upper()=="S":
                sql=f"UPDATE libros SET estado = 'soldout' where id = {id} "
                self.ejecutar(sql,())
                self.db.cnx.commit()
        else:
            print("No hay libro")
            
    def eliminarLibro(self, id):
        sql=f"SELECT * FROM libros WHERE id = {id}"
        libros=self.obtener(sql,())
        libros=self.convert_libros(libros)
        if libros:
            for l in libros:
                print(l)
            if (input("Seguro que quieres continuar? ")).upper()=="S":
                sql=f"DELETE FROM libros WHERE id = {id} "
                self.ejecutar(sql,())
                self.db.cnx.commit()
        else:
            print("No hay libro")
    
    def convert_libros(self,libros):
        libros_aux=[]
        for lib in libros:
            libros_aux.append(libro(lib[0],lib[1],lib[2],lib[3],lib[4],lib[5]))
        return libros_aux