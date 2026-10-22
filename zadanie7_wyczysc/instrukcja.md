# Zadanie 7: Wyczyść magazyn

## Cel

W szablonie jest tabela i przycisk „Wyczyść magazyn” (`#wyczysc`). Klucz to `"nauka7-polka"`. Gdy na starcie nie ma zapisu, siejesz te same trzy produkty co w zadaniu 6 i wołasz `zapisz()`. Klik ustawia tablicę na pustą, zdejmuje klucz (`removeItem`), odświeża tabelę i pokazuje „Wyczyszczono”.

## Przydatne

`removeItem` kasuje jeden klucz. Tablicę w pamięci też zerujesz, bo sam HTML nie jest źródłem prawdy. Nie wołaj `localStorage.clear()` — zmaże inne zadania. Przy `parse` owijasz odczyt w `try` / `catch`.

```js
localStorage.removeItem("nauka7-polka");
```

## Wymagania

1. Klucz to `"nauka7-polka"`.
2. Pierwsze otwarcie pokazuje trzy startowe produkty.
3. Klik czyści tabelę, kasuje zapis i pokazuje „Wyczyszczono”.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po otwarciu widać dwa albo trzy wiersze. Kliknij „Wyczyść magazyn”. Tabela jest pusta, w `#wynik` jest „Wyczyszczono”. Odśwież stronę (F5). Tabela nadal jest pusta.
