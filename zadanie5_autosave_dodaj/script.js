const klucz = "nauka5-polka";
const formularz = document.getElementById("formularz");
const nazwa = document.getElementById("nazwa");
const cena = document.getElementById("cena");
const wynik = document.getElementById("wynik");
const tabela = document.getElementById("tableBody");

let produkty = JSON.parse(localStorage.getItem(klucz) || "null");

if (produkty === null) {
  produkty = [
    { nazwa: "Kakao", cena: 4.5 },
    { nazwa: "Herbata", cena: 3 }
  ];

  localStorage.setItem(klucz, JSON.stringify(produkty));
}

function pokazTabele() {
  tabela.innerHTML = "";

  for (const produkt of produkty) {
    tabela.innerHTML +=
      `<tr><td>${produkt.nazwa}</td><td>${produkt.cena}</td></tr>`;
  }
}

pokazTabele();

formularz.addEventListener("submit", function (e) {
  e.preventDefault();

  if (nazwa.value.trim() === "") {
    wynik.textContent = "Podaj nazwę";
    return;
  }

  produkty.push({
    nazwa: nazwa.value.trim(),
    cena: Number(cena.value)
  });

  localStorage.setItem(klucz, JSON.stringify(produkty));

  pokazTabele();

  wynik.textContent = "Dodano: " + nazwa.value.trim();

  formularz.reset();
});