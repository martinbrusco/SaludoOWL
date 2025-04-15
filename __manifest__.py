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
            'security/ir.model.access.csv',
            'views/greet_greet.xml',
            'views/res_country.xml',
            'views/saludo_dashboard.xml',
            'views/saludo_menu.xml',
            
    ],
    'installable': True,
    'auto_install': False,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'saludos/static/src/js/saludo_dashboard.js',
            'saludos/static/src/components/saludo_dashboard.js',
            'saludos/static/src/components/saludo_dashboard.xml',
            'saludos/static/src/components/chart/chart_renderer.js',
            'saludos/static/src/components/chart/chart_renderer.xml',
        ],
    }

}
