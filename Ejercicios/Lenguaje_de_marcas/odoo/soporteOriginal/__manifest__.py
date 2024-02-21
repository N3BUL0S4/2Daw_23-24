# -*- coding: utf-8 -*-
{
    'name': "modulo",

    'summary': """
        Módulo para la gestión de incidencias de RMI""",

    'description': """
        Este módulo lo hemos desarrollado en LM de DAW del 
        IES RIBERA DE LOS MOLINOS
    """,

    'author': "Fran Huertas",
    'website': "https://www.riberamolinos.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'tools',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
