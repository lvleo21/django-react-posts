from rest_framework.serializers import ModelSerializer

from apps.core.models import Post


class PostModelSerializer(ModelSerializer):
    class Meta:
        model = Post
        exclude = ["is_active"]
