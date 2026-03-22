from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Municipio
from .serializers import MunicipioSerializer

def hello(request):
    return JsonResponse({'message': 'GeoBolivia API funcionando!', 'status': 'ok'})

@api_view(['GET'])
def get_municipios(request):
    municipios = Municipio.objects.all()
    serializer = MunicipioSerializer(municipios, many=True)
    return Response(serializer.data)
