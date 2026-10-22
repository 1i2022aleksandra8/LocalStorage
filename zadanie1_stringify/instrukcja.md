# Zadanie 1: JSON.stringify

## Cel

W szablonie jest przycisk „Pokaż JSON” (`#pokaz`) i pusty akapit `#wynik`. W `script.js` zapisz jeden obiekt produktu z polami `nazwa` i `cena`. Po kliknięciu w `#wynik` ma pojawić się dokładnie ten sam napis, który zwraca `JSON.stringify` dla tego obiektu — zwarty JSON, bez ręcznego sklejania cudzysłowów.

## Przydatne

Przeglądarka i `localStorage` trzymają tekst, nie obiekt. `JSON.stringify(obiekt)` zamienia literał na napis. Ten napis wstawiasz przez `textContent`. Gdybyś wpisał cały obiekt prosto do akapitu, zobaczysz `[object Object]`.

```js
const napis = JSON.stringify(produkt);
```

## Wymagania

1. Obiekt ma pola `nazwa: "Mleko 2%"` oraz `cena: 3.5`.
2. Klik `#pokaz` wpisuje w `#wynik` wynik `JSON.stringify` tego obiektu.
3. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij „Pokaż JSON”. W akapicie pojawia się `{"nazwa":"Mleko 2%","cena":3.5}`.
