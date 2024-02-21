# -*- coding: utf-8 -*-


from odoo import models, fields, api


class incidencia(models.Model):
    _name = 'modulo_Ruben.incidencia'
    _description = 'Modelo de datos para incidencias'

    descripcion= fields.Char(
        string='Descripción',
    )
    procesador= fields.Char(
        string='Procesador'
    )
    ram= fields.Integer(
        string='Memoria RAM'
    )
    capacidadDisc= fields.Integer(
        string='Capacidad de disco duro'
    )
    
    tipoDisco= fields.Selection(
        string='Tipo de disco duro',
        selection=[('0','mecanico'),('1','ssd'),('2','rom')]
    )
    fechaC= fields.Datetime(
        string='Fecha de compra',
    )
    
    precioC= fields.Float(
        string='Precio de compra',
    )
    
    nserie= fields.Integer(
        string='Numero de serie'
    )
    ubicacion_id=fields.Many2one(
        string='Ubicacion',
        comodel_name='modulo_Ruben.ubicacion',
        ondelete='restrict',
    )
    
class ubicacion(models.Model):
    _name = 'modulo_Ruben.ubicacion'
    _description = 'Modelo de datos para ubicacion'
    
    nombre=fields.Char(
        string='Ubicacion',
        required=True,
    )
    
    pabellon=fields.Selection(
        string='Pabellon',
        selection=[('1','Pabellon A'),('2','Pabellon B'),('3','Pabellon C'),('4','Pabellon D')],
        
    )

    planta=fields.Selection(
        string='Planta',
        selection=[('0','Planta baja'),('1','Planta primera'),('2','Planta segunda'),('3','Planta tercera')],
        
    )
    
    # incidencias_ids=fields.One2many('modulo_Ruben.incidencia','ubicacion_id')
#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
