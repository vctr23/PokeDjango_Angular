
import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import PokemonCard
from api.serializers import PokemonCardSerializer

class PokemonCardList(APIView):
    def get(self, request):
        url = "https://api.pokemontcg.io/v2/cards"
        headers = {
            "X-Api-Key": "18aca43d-42e6-4870-8dd9-0e15e6a6fd1b"
        }
        response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            data = response.json()["data"]
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "No se pudieron obtener los datos"}, status=status.HTTP_400_BAD_REQUEST)
