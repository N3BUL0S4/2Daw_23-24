# -*- coding: utf-8 -*-

from odoo import models, fields, api


class incidencia(models.Model):
    _name = 'soporte.incidencia'
    _description = 'Modelo de datos para incidencias'

    descripcion= fields.Char(
        string='Descripción',
    )
    prioridad= fields.Integer(
        string='Prioridad',
    )
    urgente= fields.Selection(
        string='Urgente',
        selection=[('0','No'),('1','Sí')]
    )
    cerrada= fields.Boolean(
        string='Cerrada',
    )
    ubicacion_id=fields.Many2one(
        string="Ubicacion",
        comodel_name="soporte.ubicacion",
        ondelete="restrict"
    )
    
    tecnico_id=fields.Many2many('soporte.tecnico')
    
class ubicacion(models.Model):
    _name = "soporte.ubicacion"
    _descripcion = "Modelo de datos para ubicaciones"
    
    nombre = fields.Char(
        string="Ubicacion",
        required= True
    )
    
    pabellon=fields.Selection(
        string="Pabellon",
        selection=[('1','Pabellon A'),('2','Pabellon B'),('3','Pabellon C'),('4','Pabellon D'),]
    )

    planta=fields.Selection(
        string="planta",
        selection=[('1','Planta 1'),('2','Planta 2'),('3','Planta 3'),('4','Planta 4'),]
    )
    incidencias_ids=fields.One2many('soporte.ubicacion','ubicacion_id')

class tecnico(models.Model):
    _name = "soporte.tecnico"
    _descipcion = "Modelo de datos para tecnicos que dan asistencia"

    nombre=fields.Char(
        string='name',
        required=True
    )
    
    categoria=fields.Char(
        string='Categoria',
        required=True
    )

    incidencias_ids=fields.One2many('soporte.incidencia','tecnico_id')
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100