from odoo import fields, models

class Friend(models.Model):
    _name = "greet.friend"
    _description = "Amigos"
    _inherits = {'res.partner': 'partner_id'}

    partner_id = fields.Many2one(  # ✅ Corregido
        'res.partner',
        delegate=True,
        ondelete='cascade',
        required=True
    )

    nickname = fields.Char()
