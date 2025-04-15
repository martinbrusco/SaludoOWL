from odoo import fields, models  # ✅ Correcto

class Hola(models.Model):
    _name = "greet.greet"
    _description = "Saludos"

    name = fields.Char()
    date = fields.Datetime(default=fields.Datetime.now)  # ✅ Ojo: sin paréntesis

