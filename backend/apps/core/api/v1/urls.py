from rest_framework.routers import DefaultRouter

from .posts.viewsets import PostModelViewSet

v1 = DefaultRouter()
v1.register("posts", PostModelViewSet)
