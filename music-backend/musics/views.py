from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Music
from .serializers import MusicSerializer

def index(request):
    return HttpResponse("Olá mundo! Este é o app notes de Tecnologias Web do Insper.")


# Getting full playlist:
@api_view(['GET', 'POST'])
def api_playlist(request):
    if request.method == 'GET':
        playlist = Music.objects
        serialized_playlist = MusicSerializer(playlist, many=True)
        return Response(serialized_playlist.data)