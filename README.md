# iskola-bintruder
Ez egy iskolai projektem, ahol a csapatmunkát gyakoroljuk, és szimuláljuk a céges életet.

# Info
A projekt célja az volt, hogy a [Burp Suite](https://portswigger.net/burp) nevű program egy részét lefejlesszük javascript-ben.\
A **Burp Suite** segítségével a fejlesztők könnyebben tudják tesztelni a weboldalaik biztonságát, és akár a gyengeségeiket is meg tudják találni.\
A weboldal funckiói:
- HTTP lekérdezések "küldése", és a "válaszok" megtekintése
- A lekérdezés paraméterezése:
  - Lehet több paraméter
  - A kiválasztott támadástól függően több féle érték típus kiválasztása
- Több féle érték típus:
  - "Simple list" - Bármilyen értékek listája, vagy a weboldalon beírva vagy file-ból feltöltve
  - "Brute forcer" - Egy karaktersorozatból legenerálja az összes kombinációt a megadott hossz intervallumban
- Több féle támadás:
  - "Sniper" - Minden paramétér helyére egyesével beilleszti a megadott érték típust
  - "Cluster Bomb" - Minden paraméternek saját érték típusa van, és egyszerre vannak behelyettesítve

# Használat
1. Írja be a **Target** mezőbe a weboldal linkjét, és nyomja meg az *Enter* billentyűt
2. Ez után, egy alap HTML lekérdezés meg fog jelenni az oldalon. Ezt a lekérdezést bárhogy mnegváltoztathatja.
3. Ha kijelöli a szöveg egy részét, és megnyomja az **Add** gombot - vagy az *Alt + C* billentyűkombinációt, akkor hozzá tud adni a lekérdezéshez egy paramétert.
4. A **Payloads** szekcióban tudja megszabni hogy a paraméterek milyen adatokkal lesznek elküldve.
5. 

# Készítők:
- Bábolnai Bence ([Bencso](https://github.com/bencso))
  - Az oldal stílusa
  - A lekérdezések eredményének megjelenítése
- Vajda Dániel ([Vajdani](https://github.com/Vajdani))
  - Az oldal funkcionalitása