# Táncoló jelzőlámpa
## Feladat egy táncoló jelzőlámpa animálása a böngészóben

Socket.io megértéséhez elsősorban a https://socket.io/get-started/chat forrást használtam
A böngészőben lévő forma megjelenítéséhez a https://www.youtube.com/watch?v=iAakoT3CC4E videót használtam fel.
A cliens oldalhoz az információ küldéséhez a https://www.youtube.com/watch?v=FduLSXEHLng videóban bemutatott WebSocket-et használtam.

A szerver oldalon beolvasom a csv filet. A beolvasott adatokat felosztom a framekhez szükséges menyiségekre.
Megadott időközönként (60 fps-nek megfelelően) küldöm az adott frame adatait a client-nek.
Client oldalon az adott frame adatait felhasználva megrajzolom a formát.

![image](https://user-images.githubusercontent.com/92054638/202231623-bc21bf7b-4c42-4f3d-8dc3-48dc5bf1f5bb.png)
