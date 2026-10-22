# Zadanie 6: Usuń i zapisz

## Cel

W szablonie jest tabela z kolumną „Usuń”. Na starcie, gdy klucz `"nauka6-polka"` jest pusty, wpisujesz Mleko (3.5), Chleb (4.2) i Masło (8.9) i od razu `zapisz()`. Gdy zapis jest, wołasz `wczytaj()`. „Usuń” zdejmuje rekord (`splice`), zapisuje tablicę i odświeża tabelę.

## Przydatne

Indeks z pętli zapisujesz jako `const indeks = i` zanim powiesisz nasłuch. Po `splice` wołasz `zapisz()` i `pokazTabele()`. Bez zapisu usunięty wiersz wróci po F5. Przy `parse` owijasz odczyt w `try` / `catch`.

```js
produkty.splice(indeks, 1);
```

## Wymagania

1. Klucz zapisu to `"nauka6-polka"`.
2. Na starcie widać trzy produkty (albo to, co zostało w storage).
3. „Usuń” zdejmuje jeden rekord z tablicy i z zapisu.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po otwarciu widać Mleko, Chleb i Masło. Usuń Chleb. Odśwież stronę (F5). Zostają Mleko i Masło.
