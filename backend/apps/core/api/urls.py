from django.urls import path, include

from .v1.urls import v1


urlpatterns = [path("v1/", include(v1.urls))]
