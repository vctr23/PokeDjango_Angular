from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password, check_password
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from api.serializers import UserSerializer
import json


# Método para registrar usuarios desde angular 
@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        print("🔍 Datos recibidos desde Angular:", request.data)  
        # Cifrar la contraseña
        password = request.data.get('password')
        request.data['password'] = make_password(password)

        # Crear el usuario con la contraseña cifrada
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Usuario registrado con éxito"}, status=status.HTTP_201_CREATED)
        else:
            print("🔴 Errores de validación:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Método para obtener los usuarios y mostrarlos en api
@api_view(['GET'])
def get_users(request):
    users = User.objects.all()

    if not users.exists():
        return Response({"message": "No hay usuarios en la base de datos"}, status=404)

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, status=200)


# Método para iniciar sesión desde angular
@api_view(['POST'])
def login_user(request):
    if request.method == "POST":
        try:
            # Datos que llegan desde la petición de iniciar sesión en angular
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")

            if not email or not password:
                return Response({"error": "Se requieren ambos campos: email y contraseña"}, status=status.HTTP_400_BAD_REQUEST)

            # Busco el usuario por el email (más facil de encontrar)
            user = User.objects.filter(email=email).first()

            if user:
                # Verificar la contraseña hasehada
                if check_password(password, user.password):
                    return Response({"message": "Login exitoso", "user": {"username": user.username, "email": user.email}}, status=status.HTTP_200_OK)
                else:
                    return Response({"error": "Contraseña incorrecta"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        except json.JSONDecodeError:
            return Response({"error": "Formato JSON inválido"}, status=status.HTTP_400_BAD_REQUEST)

    # Error si se hace cualquier request que no sea POST
    return Response({"error": "Método no permitido"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)