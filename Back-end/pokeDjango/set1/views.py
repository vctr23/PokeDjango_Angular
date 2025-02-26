import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PokemonSet1
from api.serializers import PokemonSet1Serializer

# Create your views here.
class PokemonSet1View(APIView):
    def get(self, request):
        url = "https://api.pokemontcg.io/v2/cards?q=set.id:sv3pt5&select=id,name,supertype,number,rarity,images,types&orderBy=number"
    
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()["data"]
            sets_creados = []

            for set_data in data:
                id_set = set_data.get("id")
                name = set_data.get("name")
                supertype = set_data.get("supertype")
                number = set_data.get("number")
                rarity = set_data.get("rarity")
                image_front = set_data.get("images", {}).get("small")
                types = set_data.get("types", [])  # 🔥 Captura los tipos, si no hay, usa lista vacía

                # Asegurarse de que no existe antes de crear el set
                if not PokemonSet1.objects.filter(id=id_set).exists():
                    nuevo_set = PokemonSet1.objects.create(
                        id=id_set,
                        name=name,
                        supertype=supertype,
                        number=number,
                        rarity=rarity,
                        image=image_front,
                        image_reverse=image_reverse,
                        types=types  # 🔥 Guarda los tipos
                    )
                    sets_creados.append(nuevo_set)

            sets = PokemonSet1.objects.all()
            serializer = PokemonSet1Serializer(sets, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "No se pudieron obtener los datos"}, status=status.HTTP_400_BAD_REQUEST)

