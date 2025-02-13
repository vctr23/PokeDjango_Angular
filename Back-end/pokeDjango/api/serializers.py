from rest_framework import serializers
from pokemon.models import PokemonCard

# Clase serializadora del objeto que queremos guardar en la api
class PokemonCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonCard
        fields = '__all__'