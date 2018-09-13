from django.http import JsonResponse
from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from .models import User
from .permissions import IsUserOrReadOnly
from .serializers import CreateUserSerializer, UserSerializer


def get_tenant(request):
    json_response = {
        'slug': 'smartcov',
        'legal_name': 'SmartCoverage Insurance',
        'branding': {
            'primary_color': '#ff3300',
            'secondary_colour': '#cccccc',
            'logo': 'https://scis-prod-static-assets.s3.amazonaws.com/static/build/img/scis_logo.6452b4e019ad.svg',
        },
        'meta': {
            'address1': '1 Acacia Close',
            'address2': '',
            'city': 'Windsor',
            'province': 'Ontario',
            'postal_code': 'A1A 1A1',
            'phone': '1-866-1234',
            'fax': '1-866-1234',
        }
    }
    return JsonResponse(json_response)


class UserViewSet(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    """
    Updates and retrieves user accounts
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsUserOrReadOnly,)


class UserCreateViewSet(mixins.CreateModelMixin,
                        viewsets.GenericViewSet):
    """
    Creates user accounts
    """
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = (AllowAny,)
