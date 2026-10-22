# Zadanie 5: Autosave przy dodawaniu

## Cel

W szablonie jest formularz `#formularz` z polami `#nazwa` i `#cena`, tabela `#tableBody` oraz akapit `#wynik`. Na starcie wołasz `wczytaj()`. Gdy pod kluczem `"nauka5-polka"` nie ma zapisu (`getItem` jest `null`), ustawiasz Kakao (4.5) i Herbatę (3) i od razu wołasz `zapisz()`. Gdy zapis jest, korzystasz z niego.

Po wysłaniu niepusta nazwa robi `push`, `zapisz`, `pokazTabele` i `reset`. Pusta nazwa pokazuje „Podaj nazwę”.

## Przydatne

Po `push` zapisujesz całą tablicę: `stringify` i `setItem`. `preventDefault` jest pierwszy. Cenę zamień przez `Number`. Przy `parse` owijasz odczyt w `try` / `catch`.

```js
localStorage.setItem("nauka5-polka", JSON.stringify(produkty));
```

## Wymagania

1. Klucz zapisu to `"nauka5-polka"`.
2. Pierwsze otwarcie (brak klucza) daje dwa wiersze startowe i od razu je zapisuje.
3. Wysyłka nie odświeża strony.
4. Pusta nazwa nie dodaje rekordu i pokazuje „Podaj nazwę”.
5. Sukces pokazuje „Dodano: ” oraz nazwę.
6. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Dodaj `Mięta` i `3.5`. W `#wynik` jest „Dodano: Mięta”, a w tabeli trzeci wiersz. Odśwież stronę (F5). Nadal widać trzy wiersze, w tym Miętę. Wyczyść nazwę i wyślij — pojawia się „Podaj nazwę”.
