from rest_framework.viewsets import ModelViewSet

from .serializers import PostModelSerializer
from apps.core.models import Post


class PostModelViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostModelSerializer
    permission_classes = []
