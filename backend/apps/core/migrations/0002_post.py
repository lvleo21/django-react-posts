# Generated by Django 4.2.9 on 2024-07-14 15:49

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Criado em')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Atualizado em')),
                ('is_active', models.BooleanField(default=True, help_text='Designa se este usuário está ativo na plataforma.', verbose_name='Está ativo?')),
                ('author', models.CharField(max_length=255, verbose_name='Autor')),
                ('message', models.TextField(verbose_name='Mensagem')),
            ],
            options={
                'verbose_name': 'Publicação',
                'verbose_name_plural': 'Publicações',
            },
        ),
    ]
