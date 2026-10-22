# JSON i localStorage

W [`21_obiekty`](../21_obiekty/) tablica była stanem do odświeżenia. F5 wracało do tego, co wpisałeś w skrypcie. Tu ten sam magazyn **zostaje**, bo zapisujesz go w przeglądarce.

Przeglądarka trzyma **tekst**, nie obiekt. Dlatego najpierw JSON, potem `localStorage`.

Ciasteczka (`document.cookie`) są w [`23_ciasteczka`](../23_ciasteczka/). Fetch jest w [`24_fetch`](../24_fetch/). Klasy nie są tu nowym tematem.

---

## 1. JSON — obiekt na napis i z powrotem

`JSON.stringify(obiekt)` daje napis. `JSON.parse(napis)` składa obiekt albo tablicę z powrotem.

```js
const produkt = { nazwa: "Mleko 2%", cena: 3.5 };
const napis = JSON.stringify(produkt);
const zPowrotem = JSON.parse(napis);
```

`napis` wygląda jak `{"nazwa":"Mleko 2%","cena":3.5}`. To nie jest ten sam obiekt w pamięci — to kopia w tekście. Funkcje **giną**: `stringify` nie zapisze metody `etykieta`.

Typowa pomyłka: wpisać obiekt prosto do `localStorage`. Przeglądarka zrobi z niego `"[object Object]"` i `parse` się wywali albo da śmieci.

---

## 2. Zły napis

`parse` na niepełnym JSON rzuca wyjątek i zatrzymuje skrypt.

```js
try {
  const dane = JSON.parse(surowy);
} catch (e) {
  document.getElementById("wynik").textContent = "Niepoprawny JSON";
}
```

Na zajęciach po błędzie pokazujesz komunikat i idziesz dalej. Nie zostawiasz pustego `catch`.

Typowa pomyłka: ufać, że w storage zawsze jest poprawny JSON. Uczeń mógł wpisać ręcznie albo stary klucz został po innym zadaniu.

---

## 3. localStorage

`localStorage` pamięta pary klucz–wartość **po odświeżeniu i po zamknięciu przeglądarki** (na tym komputerze, w tej przeglądarce). Limit to kilka megabajtów. To nie jest serwer i nie jest wspólne dla całej klasy.

```js
const KLUCZ = "sklep-polka";

localStorage.setItem(KLUCZ, JSON.stringify(produkty));
const surowy = localStorage.getItem(KLUCZ);
localStorage.removeItem(KLUCZ);
```

`getItem` przy braku klucza daje `null`, nie pusty napis. Najpierw sprawdzasz `null`, potem `parse`.

Klucz piszesz jako stałą. Dwa zadania z tym samym kluczem nadpiszą sobie półki — w każdym zadaniu inna nazwa.

Typowa pomyłka: zapisać, a nie wczytać na starcie. Albo wczytać i nadpisać startową tablicą z skryptu, więc F5 znowu kasuje dodane wiersze.

---

## 4. Wczytaj na starcie, zapisz po zmianie

```js
function wczytaj() {
  const surowy = localStorage.getItem(KLUCZ);
  if (surowy === null) {
    return [];
  }
  try {
    const dane = JSON.parse(surowy);
    if (!Array.isArray(dane)) {
      return [];
    }
    return dane;
  } catch (e) {
    return [];
  }
}

function zapisz() {
  localStorage.setItem(KLUCZ, JSON.stringify(produkty));
}

let produkty = wczytaj();
```

Po `push`, `splice` albo `sort` wołasz `zapisz()` i `pokazTabele()`. Widok nadal budujesz z tablicy, tak jak w 21. Storage nie zastępuje `pokazTabele()`.

Gdy chcesz dane startowe tylko przy **pierwszej** wizycie: jeśli `getItem` jest `null`, ustaw tablicę i od razu `zapisz()`. Przy kolejnym F5 wczytasz już to, co uczeń nadrabiał.

Typowa pomyłka: `produkty = [ { nazwa: "Mleko" } ];` na górze skryptu **po** `wczytaj()`. To kasuje zapis.

---

## 5. Wyczyść

`removeItem(KLUCZ)` zdejmuje zapis. Tablicę w pamięci też ustawiasz na `[]` i odświeżasz tabelę. Samo wyczyszczenie HTML-a zostawia JSON w storage — po F5 wiersze wrócą.

`localStorage.clear()` kasuje **wszystkie** klucze tej domeny. Na zajęciach tego nie wołamy — zmaże inne zadania.

---

## 6. sessionStorage

To samo API: `setItem`, `getItem`, `removeItem`, ten sam JSON.

```js
sessionStorage.setItem("notatka-karta", notatka);
```

Różnica: zapis ginie po **zamknięciu karty**. Odświeżenie (F5) go nie kasuje. To nie jest ciasteczko sesyjne i nie jest logowanie.

Typowa pomyłka: mylić `sessionStorage` z sesją PHP albo z ciasteczkiem bez daty. Tu jesteśmy tylko w JS, w tej karcie.

---

## 7. Czego tu nie robimy

| Temat | Gdzie |
| ----- | ----- |
| `document.cookie`, ciasteczko sesyjne | dział 23 |
| `fetch` | dział 24 |
| `class` / `new` | extra |
| `localStorage.clear()` na sprawdzianie | nie używamy |

Tabela powyżej rozdziela ten dział od następnych. Typowa pomyłka: zapisać tabelę w ciasteczku, „bo też pamięta”. Do półki produktów bierzemy `localStorage`.

---

## 8. Częste pułapki

1. **Obiekt bez `stringify`** — w storage ląduje `"[object Object]"`.
2. **`parse` bez `try`** — jeden zły znak wywala całą stronę.
3. **Brak wczytania na starcie** — zapis jest, widok startuje z twardej tablicy.
4. **Zapis tylko raz**, nie po `splice` — usunięty wiersz wraca po F5.
5. **Ten sam klucz** w dwóch zadaniach — półki się mieszają.
6. **`clear()`** zamiast `removeItem` — znikają obce klucze.
