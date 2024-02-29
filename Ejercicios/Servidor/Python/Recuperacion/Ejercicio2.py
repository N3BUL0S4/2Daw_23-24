from urllib.parse import *
url="https://cipri.es?year=1988&challenger=1"

o = urlparse(url)
print (o)
parametros= o.query.split("&")
print(parametros[0].split("=")[1])
print(parametros[1].split("=")[1])
