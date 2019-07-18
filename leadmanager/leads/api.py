from rest_framework import viewsets, permissions 
from .serializers import LeadSerialzer
from .models import Lead
# Lead Serializers

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerialzer
