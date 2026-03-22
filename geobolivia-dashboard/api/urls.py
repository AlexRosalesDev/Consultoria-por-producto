from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name='hello'),
    path('municipios/', views.get_municipios, name='municipios'),
]
