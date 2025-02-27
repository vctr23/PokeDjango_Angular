from rest_framework import serializers
from pokemon.models import PokemonCard
from pokemonSet.models import PokemonSet
from set1.models import PokemonSet1
from set2.models import PokemonSet2
from set3.models import PokemonSet3
from set4.models import PokemonSet4
from set5.models import PokemonSet5
from users.models import User

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

class PokemonSet2Serializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonSet2
        fields = '__all__'

class PokemonSet3Serializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonSet3
        fields = '__all__'

class PokemonSet4Serializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonSet4
        fields = '__all__'

class PokemonSet5Serializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonSet5
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'