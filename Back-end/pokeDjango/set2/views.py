import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PokemonSet2
from api.serializers import PokemonSet2Serializer


class PokemonSet2View(APIView):
    def get(self, request):
        url = "https://api.pokemontcg.io/v2/cards?q=set.id:swsh11&select=id,name,supertype,number,rarity,images&orderBy=number&18aca43d-42e6-4870-8dd9-0e15e6a6fd1b"
        

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
                image = set_data.get("images", {}).get("small")

                # Asegurarse de que no existe antes de crear el set
                if not PokemonSet2.objects.filter(id=id_set).exists():
                    nuevo_set = PokemonSet2.objects.create(
                        id=id_set,
                        name=name,
                        supertype=supertype,
                        number=number,
                        rarity=rarity,
                        image=image
                    )
                    sets_creados.append(nuevo_set)

            sets = PokemonSet2.objects.all()
            serializer = PokemonSet2Serializer(sets, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "No se pudieron obtener los datos"}, status=status.HTTP_400_BAD_REQUEST)
