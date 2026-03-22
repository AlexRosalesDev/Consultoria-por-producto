from django.core.management.base import BaseCommand
from api.models import Municipio

class Command(BaseCommand):
    help = 'Carga datos de ejemplo de municipios con coordenadas de capitales'

    def handle(self, *args, **options):
        # Eliminar datos existentes
        Municipio.objects.all().delete()
        
        municipios_data = [
            {'nombre': 'La Paz', 'latitud': -16.5000, 'longitud': -68.1500, 'poblacion': 800000},
            {'nombre': 'Santa Cruz', 'latitud': -17.7833, 'longitud': -63.1833, 'poblacion': 1500000},
            {'nombre': 'Cochabamba', 'latitud': -17.3833, 'longitud': -66.1500, 'poblacion': 600000},
            {'nombre': 'Potosí', 'latitud': -19.5836, 'longitud': -65.7531, 'poblacion': 200000},
            {'nombre': 'Sucre', 'latitud': -19.0333, 'longitud': -65.2627, 'poblacion': 300000},
            {'nombre': 'Oruro', 'latitud': -17.9667, 'longitud': -67.1167, 'poblacion': 250000},
            {'nombre': 'Tarija', 'latitud': -21.5355, 'longitud': -64.7295, 'poblacion': 200000},
            {'nombre': 'Trinidad', 'latitud': -14.8333, 'longitud': -64.9000, 'poblacion': 100000},
            {'nombre': 'Cobija', 'latitud': -11.0267, 'longitud': -68.7692, 'poblacion': 50000},
        ]
        
        for data in municipios_data:
            municipio = Municipio.objects.create(
                nombre=data['nombre'],
                latitud=data['latitud'],
                longitud=data['longitud'],
                poblacion=data['poblacion']
            )
            self.stdout.write(f"Creado: {municipio.nombre} en ({municipio.latitud}, {municipio.longitud})")
        
        self.stdout.write(self.style.SUCCESS(f'✅ {len(municipios_data)} municipios cargados exitosamente!'))
