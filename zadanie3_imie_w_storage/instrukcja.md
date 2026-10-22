# Zadanie 3: Imię w localStorage

## Cel

W szablonie jest pole `#imie`, przycisk „Zapisz imię” (`#zapisz`) i akapit `#wynik`. Zapisujesz imię pod stałym kluczem `"nauka3-imie"`. Po odświeżeniu strony pole ma nadal to samo imię, jeśli wcześniej coś zapisano.

## Przydatne

`localStorage.setItem(klucz, napis)` zapisuje tekst. `localStorage.getItem(klucz)` przy braku klucza daje `null`. Na starcie sprawdzasz `null` i dopiero wtedy wypełniasz pole. Przed zapisem robisz `trim`.

```js
localStorage.setItem("nauka3-imie", imie);
```

## Wymagania

1. Klucz zapisu to `"nauka3-imie"`.
2. Po otwarciu, gdy `getItem` nie jest `null`, pole `#imie` ma tę wartość.
3. Klik przy pustym (po `trim`) imieniu pokazuje „Podaj imię” i nic nie zapisuje.
4. Poprawny zapis pokazuje „Zapisano imię”.
5. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Wpisz `Ola` i kliknij „Zapisz imię”. W `#wynik` jest „Zapisano imię”. Odśwież stronę (F5). Pole nadal pokazuje „Ola”. Wyczyść pole i zapisz. W `#wynik` pojawia się „Podaj imię”.
