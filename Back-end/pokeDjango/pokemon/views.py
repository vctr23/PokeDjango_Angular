from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PokemonCard, PokemonSet
import requests

class PokemonCardView(APIView):
    def get(self, request):
        # URL de la API de Pokémon
        url = 'https://api.pokemontcg.io/v2/cards'
        headers = {
            'Authorization': 'Bearer <tu_token_de_autorizacion>'  # Reemplaza con tu token si es necesario
        }

        # Obtener los datos desde la API externa
        response = requests.get(url, headers=headers)

        if response.status_code != 200:
            return Response({'error': 'Error al obtener datos de la API externa'}, status=status.HTTP_400_BAD_REQUEST)

        data = response.json()
        processed_cards = []  # Lista para almacenar los datos procesados

        # Iterar sobre los datos obtenidos
        for card_data in data.get('data', []):
            id_card = card_data['id']  # El id único de la carta
            name = card_data['name']
            image_url = card_data['images']['small']
            types = ', '.join(card_data['types']) if 'types' in card_data else ''
            rarity = card_data.get('rarity', '')
            set_code = card_data.get('set', {}).get('id', None)
            printed_total = card_data.get('set', {}).get('printedTotal', 0)  # Default to 0 if not present

            # Obtener el objeto PokemonSet correspondiente
            pokemon_set = PokemonSet.objects.get_or_create(
                id=set_code,
                defaults={'name': set_code, 'printedTotal': printed_total}
            )[0]

            # Verificar si la tarjeta ya existe
            card, created = PokemonCard.objects.get_or_create(
                id_card=id_card,  # Usamos id_card como clave primaria
                defaults={
                    'name': name,
                    'image_url': image_url,
                    'types': types,
                    'rarity': rarity,
                    'set': pokemon_set
                }
            )

            if not created:
                # Si la tarjeta ya existía, actualizar los campos necesarios
                card.name = name
                card.image_url = image_url
                card.types = types
                card.rarity = rarity
                card.set = pokemon_set
                card.save()

            # Añadir la carta procesada a la lista de resultados
            processed_cards.append({
                'id_card': card.id_card,
                'name': card.name,
                'image_url': card.image_url,
                'types': card.types,
                'rarity': card.rarity,
                'set': card.set.name
            })

        # Retornar los datos procesados
        return Response({'cards': processed_cards}, status=status.HTTP_200_OK)

