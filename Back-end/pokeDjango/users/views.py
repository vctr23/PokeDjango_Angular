from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import User
from api.serializers import UserSerializer


@api_view(['POST'])
def register_user(request):
    print("🔍 Datos recibidos desde Angular:", request.data)  
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Usuario registrado con éxito"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_users(request):
    users = User.objects.all()

    if not users.exists():
        return Response({"message": "No hay usuarios en la base de datos"}, status=404)

    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, status=200)