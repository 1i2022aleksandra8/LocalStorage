# Zadanie 4: Zapisz i wczytaj półkę

## Cel

W szablonie jest tabela `#tableBody`, przyciski „Zapisz półkę” (`#zapisz`), „Wczytaj półkę” (`#wczytaj`), „Pusta tabela” (`#wyczyscPamiec`) oraz akapit `#wynik`. Tablica produktów jest stanem strony. Na starcie zawsze wpisujesz dwa rekordy w skrypcie. Nie czytasz storage przy otwarciu i nie zapisujesz automatycznie.

„Zapisz półkę” wrzuca tablicę do `localStorage` pod kluczem `"nauka4-polka"`. „Pusta tabela” czyści tylko tablicę w pamięci i odświeża widok — nie woła `removeItem`. „Wczytaj półkę” bierze zapis z storage i zastępuje tablicę.

## Przydatne

`JSON.stringify(produkty)` daje napis tablicy. `setItem` zapisuje ten napis. Przy wczytaniu najpierw `getItem`: `null` oznacza brak zapisu. Potem `parse` owijasz w `try` / `catch`. Funkcja `pokazTabele()` buduje wiersze z tablicy. Nie nazywaj jej `rysuj()`.

```js
localStorage.setItem("nauka4-polka", JSON.stringify(produkty));
```

## Wymagania

1. Po otwarciu w tabeli są dwa produkty: „Mleko 2%” (3.5) i „Chleb” (4.2). Storage nie jest wtedy czytany.
2. Klucz zapisu to `"nauka4-polka"`.
3. „Zapisz półkę” zapisuje tablicę i pokazuje „Zapisano półkę”.
4. „Pusta tabela” zostawia zero wierszy i nie kasuje klucza w storage.
5. „Wczytaj półkę” przy `null` pokazuje „Brak zapisu” i nie zmienia tabeli.
6. Poprawny zapis zastępuje tablicę, odświeża tabelę i pokazuje „Wczytano półkę”.
7. Zły JSON w storage daje „Niepoprawny JSON” i zostawia tabelę.
8. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij „Pusta tabela”. Tabela jest pusta. Kliknij „Wczytaj półkę” bez wcześniejszego zapisu — w `#wynik` jest „Brak zapisu”. Odśwież stronę (F5). Znowu widać dwa startowe wiersze, bo na starcie nie czytasz storage. Kliknij „Zapisz półkę”, potem „Pusta tabela”, potem „Wczytaj półkę”. Tabela znów ma dwa wiersze.
