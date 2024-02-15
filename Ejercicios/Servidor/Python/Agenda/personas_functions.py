from persona import Persona

agenda=[]
def insertarPersona():
    nombre=input("Introduce el nombre")
    apellidos=input("Introduce el apellidos")
    telefono=input("Introduce el telefono")
    direccion=input("Introduce el direccion")
    p=Persona(nombre,apellidos,telefono,direccion)
    agenda.append(p)

def findPersona():
    name=input("Introduce el nombre")
    for p in agenda:
        if p==name:
            print(p)
            
def listarPersonasPorNombre():
    name=input("Introduce el nombre")
    for p in agenda:
        if p==name:
            print(p.nombre)
         
def eliminarPersonas():
    name=input("Introduce el nombre")
    for p in agenda:
        if p.nombre==name:
            del agenda[p]

def Menu():
    print("MENU \n ------")
    print("1.- Insertar Persona")
    print("2.- Buscar Persona por nombre")
    print("3.- Listar personaa por nombre")
    print("4.- Eliminar persona")
    print("5.- Salir")
    print("\n\n")
    return int(input("Inque una opcion: \n"))
