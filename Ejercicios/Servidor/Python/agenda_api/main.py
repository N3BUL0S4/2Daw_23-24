from pydantic import BaseModel

from db import DB
from service import Service
from fastapi import FastAPI,status

app = FastAPI()

# Se crea una conexion a la bbdd y el service
db = DB('root', '', 'localhost', 'agenda')
db.conectar()
service = Service(db)

class Persona_Request(BaseModel):
    nombre: str
    apellido: str
    telefono: str
    direccion : str


@app.post("/person/create",status_code=status.HTTP_201_CREATED)
async def create_personas(persona: Persona_Request):
    return service.insertar_persona(persona.nombre, persona.apellido, persona.telefono, persona.direccion)

@app.get("/persona/all",status_code=status.HTTP_200_OK)
async def get_personas():
    return service.mostrar_personas()

@app.get("/persona/findByName",status_code=status.HTTP_200_OK)
async def get_persona_by_nombre(nombre:str):
    return service.buscar_persona(nombre)

@app.delete("/personas/delete",status_code=status.HTTP_200_OK)
async def delete(id:float):
    return service.eliminar_persona(id)