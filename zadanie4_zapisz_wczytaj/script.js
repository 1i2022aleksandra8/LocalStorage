const tabela = document.getElementById("tableBody");
const wynik = document.getElementById("wynik");
const klucz = "nauka4-polka";

let produkty = [
  { nazwa: "Mleko 2%", cena: 3.5 },
  { nazwa: "Chleb", cena: 4.2 }
];

function pokazTabele() {
  tabela.innerHTML = "";

  for (const produkt of produkty) {
    tabela.innerHTML +=
      `<tr><td>${produkt.nazwa}</td><td>${produkt.cena}</td></tr>`;
  }
}

pokazTabele();

document.getElementById("zapisz").addEventListener("click", function () {
  localStorage.setItem(klucz, JSON.stringify(produkty));
  wynik.textContent = "Zapisano półkę";
});

document.getElementById("wyczyscPamiec").addEventListener("click", function () {
  produkty = [];
  pokazTabele();
  wynik.textContent = "Pusta tabela";
});

document.getElementById("wczytaj").addEventListener("click", function () {
  const zapis = localStorage.getItem(klucz);

  if (zapis === null) {
    wynik.textContent = "Brak zapisu";
    return;
  }

  try {
    const dane = JSON.parse(zapis);

    if (!Array.isArray(dane)) {
      wynik.textContent = "Niepoprawny JSON";
      return;
    }

    produkty = dane;
    pokazTabele();
    wynik.textContent = "Wczytano półkę";
  } catch (e) {
    wynik.textContent = "Niepoprawny JSON";
  }
});