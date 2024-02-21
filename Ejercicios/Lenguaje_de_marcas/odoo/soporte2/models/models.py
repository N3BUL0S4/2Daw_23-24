# -*- coding: utf-8 -*-

from odoo import models, fields, api


class incidencia(models.Model):
    _name = 'soporte.incidencia'
    _description = 'Modelo de datos para incidencias'

    descripcion= fields.Char(
        string='Descripción',
    )
    procesador= fields.Char(
        string='Procesador',
    )
    memoriaRAM= fields.Integer(
        string='Memoria RAM',
    )
    discoduro= fields.Selection(
        string='DiscoDuro',
        selection=[('0','mecanico'),('1','SSD'),('2','ROM')]
    )
    fechaCompra= fields.Datetime(
        string='Fecha de compra',
        default=fields.Datetime.now
    )
    precioCompra= fields.Float(
        string='Precio de compra',
    )
    numeroSerie= fields.Integer(
        string='Número de serie',
    )
    ubicacion_id=fields.Many2one(
        string="Ubicacion",
        comodel_name="soporte.ubicacion",
        ondelete="restrict"
    )
    
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
        string="Pabellon",
        selection=[('1','Planta 1'),('2','Planta 2'),('3','Planta 3'),('4','Planta 4'),]
    )
    
    incidencia_ids=fields.One2many('soporte.incidencia','ubicacion_id')
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
