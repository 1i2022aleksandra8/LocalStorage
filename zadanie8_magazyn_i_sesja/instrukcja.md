# Zadanie 8: Magazyn i notatka sesji

## Cel

W szablonie jest formularz z `#nazwa`, `#cena` i `#ilosc`, przycisk „Sortuj (Cena ↓)” (`#sortCena`), tabela, `#wynik`, `#suma`, pole `#notatka` i przycisk „Zapisz notatkę na kartę” (`#zapiszNotatke`).

Półka produktów żyje w `localStorage` pod kluczem `"nauka8-polka"`. Na starcie wołasz `wczytaj()`. Gdy nie ma zapisu, siejesz Mleko (3.5, 10 szt.) i Chleb (4.2, 6 szt.) i wołasz `zapisz()`. Działają dodawanie, usuwanie, sortowanie i suma `cena * ilosc`. Każda zmiana tablicy zapisuje półkę.

Notatka idzie do `sessionStorage` pod kluczem `"nauka8-notatka"`. Na starcie wypełniasz pole, jeśli zapis jest. Klik zapisuje notatkę.

## Przydatne

`sessionStorage` ma to samo API co `localStorage`, ale ginie po zamknięciu karty. Odświeżenie (F5) notatki nie kasuje. Półka w `localStorage` zostaje także po zamknięciu karty. Po `push`, `splice` i `sort` wołasz `zapisz()`. Pusta nazwa: „Podaj nazwę”. Sukces: „Dodano: ” i `reset`. Indeks z pętli zapisujesz jako `const indeks = i` zanim powiesisz nasłuch „Usuń”. Przy `parse` owijasz odczyt w `try` / `catch`.

```js
sessionStorage.setItem("nauka8-notatka", notatka);
```

## Wymagania

1. Klucz półki to `"nauka8-polka"`. Klucz notatki to `"nauka8-notatka"`.
2. Działają dodawanie, usuwanie i sortowanie; każda zmiana zapisuje półkę.
3. Pusta nazwa nie dodaje rekordu.
4. `#suma` to suma `cena * ilosc`.
5. Zapis notatki pokazuje „Zapisano notatkę”.
6. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Dodaj Kakao, cenę `8` i ilość `2`. W `#wynik` jest „Dodano: Kakao”, suma rośnie. Odśwież stronę (F5). Wiersz Kakao i suma zostają. Wpisz `inwentaryzacja` i kliknij „Zapisz notatkę na kartę”. Odśwież (F5) — notatka nadal jest w polu (ta sama karta). Zamknięcie karty zdejmie notatkę, ale nie półkę.
