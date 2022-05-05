# Szoftvertervezes-Feladatertekelo

Automatikus feladatkiértékelő Szoftverfejlesztés tárgyra. 

|📃|A feladatok:|
|------|:-----------|
|1.|GET metódussal "/"-re, küldön vissza egy tetszőleges üzenetet|
|2.|POST metódussal "/adat"-ra, küldje vissza az üzenetben érkező adatokat (req.body)|
|3.|GET metódussal "/time"-ra küldjön vissza egy JSON-t a jelenlegi idővel (Date.now() elég)|
|4.|POST metódussal "/error"-ra küldjön vissza egy hibaüzenetet 404 státuszkóddal|

A results.txt fileban található a pontozás.

### Adatok feldolgozása

`./test.sh` lefuttatására a data mappában lévő leadott feladatokat futtatja, kiértékeli majd lelövi a script.

### Összegzés

`node summary.js` lefuttatására összegzi a hallgatónkénti feladatértékeléseket és a results.txt file végére függeszti.
