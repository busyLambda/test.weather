1. Készíts egy új, üres nodeJS projektet! A projekt vele legyen "idojaras-sajatnev", ahol a "sajatnev" a saját neved, ékezetek és szóközök nélkül (pl. "idojaras-halaszgabor")



2. Készíts egy osztály "NapiIdojaras" néven, amelyben az aznapi időjárási adatokat kell tárolnod.
Az osztályt egy külön fájlban helyezd el!
Az osztálynak legyen egy konstruktora, amely az alábbi adatot veszi át:
A hét napja (szám, 0-6 közti érték, ahol a 0 = vasárnap, 1 = hétfő... 6 = szombat)
Napi max. hőmérséklet
Napi min. hőmérséklet
Időjárás, szövegesen (pl. "napos", "felhős", "eső" stb.
Ezeket állítsd be lokális változóknak.
Készíts egy toString() függvényt is, és teszteld az osztály alapműködését az "index.js" fájlban!



3. Készíts egy új fájlt, "idojaraskezeles.js" néven. Ebben készítsd el az alábbi függvényeket:

3.1: maiidojaras()
A függvény a felhasználótól kérdezze meg a mai időjárási adatokat! (min, max hőmérséklet, és a szöveges időjárás).
A mai napot határozd meg automatikusan (a Date osztály getDay() metódusával)
A függvény visszatérési értéke legyen a NapiIdojaras egy példánya!

Javaslat: a readline modult a maiidojaras() függvényen belül inicializáld, és ott is zárd be!

Segítség:
import * as readline from 'node:readline/promises';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



3.2: beolvas()
A mellékelt idojaras.csv néhány nap időjárási adatait tárolja.
Olvasd be a fájlt, és add vissza a tartalmát egy listában, amely NapiIdojaras objektumokból áll!



A két függvényt teszteld az index.js fájlban:
Olvasd be a fájlt a beolvas() segítségével, a végeredményt mentsd el egy lokális változóba
Ehhez a listához fűzz hozzá egy elemet a maiidojaras() segítségével
Keresd meg, melyik nap volt a legmagasabb a hőmérséklet!


Pluszpontok:
A forrásfájlokat egy "src" mappában helyezd el, és a program legyen futtatható "npm start" segítségével
Az osztály végezzen hibakezelést, kivételek segítségével
A kódot TypeScript nyelven készítsd el (konzolos futtatáshoz használhatod a "ts-node" modult)
Az index fájlban, a lista tartalmát írd ki egy "idojaras-uj.csv" fájlba! A struktúrája legyen ugyanaz, mint a bemeneti fájl
