# iskola-bintruder
Ez egy iskolai projektem, ahol a csapatmunkát gyakoroljuk, és szimuláljuk a céges életet.

A projekt célja az volt, hogy a **Burp Suite** nevű program egy részét lefejlesszük javascript-ben.\
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