from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Music
from .serializers import MusicSerializer

def index(request):
    return HttpResponse("Olá mundo! Este é o app notes de Tecnologias Web do Insper.")

# Getting music by id:
@api_view(['GET', 'POST'])
def api_music(request,music_title,music_artist, music_thumbnail):
    if request.method == 'POST':
        try:
            Music.objects.get(song=music_title, artist=music_artist)
        except:
            Music.objects.create(song=music_title, artist=music_artist, thumbnail=music_thumbnail)
    music = Music.objects
    music.song = music_title
    music.artist = music_artist
    music.thumbnail = music_thumbnail
    serialized_music = MusicSerializer(Music.objects)
    return Response(serialized_music.data)


# Getting full playlist:
@api_view(['GET', 'POST'])
def api_playlist(request):
    if request.method == 'GET':
        playlist = Music.objects
        serialized_playlist = MusicSerializer(playlist, many=True)
        return Response(serialized_playlist.data)