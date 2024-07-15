from time import sleep
from rest_framework.viewsets import ModelViewSet

from .serializers import PostModelSerializer
from apps.core.models import Post


class PostModelViewSet(ModelViewSet):
    queryset = Post.objects.all().order_by("-created_at")
    serializer_class = PostModelSerializer
    permission_classes = []

    def list(self, request, *args, **kwargs):
        sleep(.5)
        return super().list(request, *args, **kwargs)
