import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PokemonSet
from api.serializers import PokemonSetSerializer

class PokemonSetList(APIView):
    def get(self, request):
        url = "https://api.pokemontcg.io/v2/sets"
        headers = {
            "X-Api-Key": "18aca43d-42e6-4870-8dd9-0e15e6a6fd1b"
        }
        response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            data = response.json()["data"]
            sets_creados = []

            for set_data in data:
                id_set = set_data.get("id")
                name = set_data.get("name")
                series = set_data.get("series")
                printedTotal = set_data.get("printedTotal", None)  # Usar None si no se encuentra
                image = set_data.get("images", {}).get("logo")

                # Asegurarse de que no existe antes de crear el set
                if not PokemonSet.objects.filter(id=id_set).exists():
                    nuevo_set = PokemonSet.objects.create(
                        id=id_set,
                        name=name,
                        series=series,
                        printedTotal=printedTotal,  # Usar el valor de printedTotal si está presente
                        image=image
                    )
                    sets_creados.append(nuevo_set)

            sets = PokemonSet.objects.all()
            serializer = PokemonSetSerializer(sets, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "No se pudieron obtener los datos"}, status=status.HTTP_400_BAD_REQUEST)
