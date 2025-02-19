from rest_framework import serializers
from pokemon.models import PokemonCard
from pokemonSet.models import PokemonSet
from set1.models import PokemonSet1

# Clase serializadora del objeto que queremos guardar en la api
class PokemonCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonCard
        fields = '__all__'
        
class PokemonSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonSet
        fields = '__all__'

class PokemonSet1Serializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonSet1
        fields = '__all__'