{
    'name': 'Saludos',
    "version": "17.0.1.0",
    'summary': 'Saludos en varios lenguajes',
    'description': "Saludos en varios lenguajes en Odoo version 17",
    'category': 'Demo',
    'author': 'Martin',
    'images': ['static/description/icon.png'],
    'website': 'https://www.google.com',
    'license': 'AGPL-3',
    'depends': ['base', 'web'],
    'data': [
        'views/saludo_dashboard.xml'
    ],
    'installable': True,
    'auto_install': False,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'saludos/static/src/components/saludo_dashboard.js',
            'saludos/static/src/components/saludo_dashboard.xml',
        ],
    }

}
