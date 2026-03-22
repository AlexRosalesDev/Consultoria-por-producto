# 🌍 GeoBolivia Dashboard

Sistema de tableros de control geoespacial para cambio climático en Bolivia.

## 🚀 Instalación para el Equipo

### Requisitos
- Python 3.11+
- Node.js 18+
- Git

### Backend (Django)

```bash
# Clonar repositorio
git clone https://github.com/AlexRosalesDev/geobolivia-dashboard.git
cd geobolivia-dashboard

# Crear y activar entorno virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Instalar dependencias
pip install django djangorestframework django-cors-headers

# Migraciones y datos
python manage.py makemigrations api
python manage.py migrate
python manage.py load_data

# Crear superusuario
python manage.py createsuperuser

# Iniciar servidor
python manage.py runserver

# en otra terminal
cd frontend
npm install
npm run dev

