from empleadosDTO import Empleado
class funciones:
    def __init__(self,db):
        self.db=db
        
    def obtener(self, sql, params):
        self.db.cursor.execute(sql, params)  
        return self.db.cursor.fetchall()

    def ejecutar(self, sql, params):
        self.db.cursor.execute(sql, params)

    def nuevoEmpleado(self,nombre,salario,numero_ventas):
        sql = "INSERT INTO empleados (nombre, salario, numero_ventas) VALUES(%s,%s,%s)"
        self.ejecutar(sql,(nombre,salario,numero_ventas))
        self.db.cnx.commit()
        print ("Empleado insertado correctamente")

    def incrementarVentas(self,id):
        sql = f"SELECT * FROM empleados WHERE id = {id}"
        empleados=self.obtener(sql, ())
        if empleados:
            sql= "UPDATE empleados SET numero_ventas = numero_ventas +1  where id = %s"
            self.ejecutar(sql,(id,))
            self.db.cnx.commit()
            print ("Empleado incrementado correctamente")
        else:
            print("El empleado no existe")

    def empledoMayorVenta(self) :
        sql = "SELECT MAX(numero_ventas) as numero_ventas FROM empleados"
        empleados=self.obtener(sql,())
        num=int(empleados[0][0])
        if empleados:
            sql= f"SELECT * FROM empleados WHERE numero_ventas = {num}"
            empleados=self.obtener(sql,())
            empleados=self.convert_to_articulos(empleados)
            for e in empleados:
                print(e)
        else:
            print("No hay empleados")

    def empleados(self) :
        sql= "SELECT * FROM empleados"
        empleados=self.obtener(sql,())
        empleados=self.convert_to_articulos(empleados)
        for e in empleados:
            print(e)
            
    def eliminarEmpleado(self, id) :
        sql= "SELECT * FROM empleados WHERE id = %s"
        empleados=self.obtener(sql,(id,))
        empleados=self.convert_to_articulos(empleados)
        for e in empleados:
            print(e)
        if input("Seguro que lo quieres eliminar Si(s) No(n)").upper()=="S":
            sql = "DELETE FROM empleados WHERE id = %s"
            self.ejecutar(sql,(id,))
            self.db.cnx.commit()
            print("Se a elminado correctamente")
        else:
            print("Cancelando...")
    
    def convert_to_articulos(self, empleados):
        empleados_aux = []
        for emp in empleados:
            empleados_aux.append(Empleado(emp[0], emp[1], emp[2], emp[3]))
        return empleados_aux