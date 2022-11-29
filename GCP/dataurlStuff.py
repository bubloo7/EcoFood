
import urllib.request

def string_to_image():
    response = urllib.request.urlopen(dataUrl)
    with open('_server.jpg', 'wb') as f:
            f.write(response.file.read())