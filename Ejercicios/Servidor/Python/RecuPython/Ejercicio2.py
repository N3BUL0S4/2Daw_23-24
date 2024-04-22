
url="https://cipri.es?year=1988&challenge=1&patata=aaa"
datos=url.split("?")[1].split("&")
for a in datos:
    print(a.split("=")[1])
    