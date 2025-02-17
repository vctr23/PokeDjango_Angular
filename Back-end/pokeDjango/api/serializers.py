from rest_framework import serializers
from pokemon.models import PokemonCard
from pokemonSet.models import PokemonSet

# Clase serializadora del objeto que queremos guardar en la api
class PokemonCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonCard
        fields = '__all__'
        
class PokemonSetSerializer(serializers.ModelSerializer):
    class Beta:
        model = PokemonSet
        fields = '__all__'