# Generated by Django 5.1.6 on 2025-02-26 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('set1', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pokemonset1',
            name='types',
            field=models.JSONField(default=list),
        ),
    ]
