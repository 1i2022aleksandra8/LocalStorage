# Zadanie 2: JSON.parse

## Cel

W szablonie jest pole `#json`, przycisk „Odczytaj” (`#parsuj`) i akapit `#wynik`. Po kliknięciu odczytujesz napis z pola i składasz z niego obiekt. Przy poprawnym JSON pokazujesz dwa wiersze z polami. Przy złym napisie pokazujesz komunikat i nie wywalasz skryptu.

## Przydatne

`JSON.parse(napis)` składa obiekt z tekstu. Niepełny JSON rzuca wyjątek — owijasz to w `try` / `catch`. W `catch` ustawiasz komunikat i idziesz dalej. Nie zostawiasz pustego `catch` i nie pozwalasz, żeby błąd zatrzymał stronę.

```js
try {
  const obj = JSON.parse(surowy);
} catch (e) {
  document.getElementById("wynik").textContent = "Niepoprawny JSON";
}
```

## Wymagania

1. Poprawny JSON daje w `#wynik` napis `"Nazwa: " + obj.nazwa + "\nCena: " + obj.cena`.
2. Zły JSON daje dokładnie „Niepoprawny JSON”.
3. Błąd nie zatrzymuje strony.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Wklej `{"nazwa":"Chleb","cena":4.2}` i kliknij „Odczytaj”. Widać dwa wiersze: „Nazwa: Chleb” i „Cena: 4.2”. Wklej `{nazwa:` i kliknij znowu. W `#wynik` jest „Niepoprawny JSON”.
