# -*- coding: utf-8 -*-
# from odoo import http


# class ModuloRuben(http.Controller):
#     @http.route('/modulo__ruben/modulo__ruben', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/modulo__ruben/modulo__ruben/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('modulo__ruben.listing', {
#             'root': '/modulo__ruben/modulo__ruben',
#             'objects': http.request.env['modulo__ruben.modulo__ruben'].search([]),
#         })

#     @http.route('/modulo__ruben/modulo__ruben/objects/<model("modulo__ruben.modulo__ruben"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('modulo__ruben.object', {
#             'object': obj
#         })
