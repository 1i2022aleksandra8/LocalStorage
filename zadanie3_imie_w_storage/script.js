const poleImie = document.querySelector("#imie");
const przycisk = document.querySelector("#zapisz");
const wynik = document.querySelector("#wynik");

const zapisaneImie = localStorage.getItem("nauka3-imie");

if (zapisaneImie !== null) {
  poleImie.value = zapisaneImie;
}
else {
    poleImie.value = null;
}

przycisk.addEventListener("click", function () {
  const imie = poleImie.value.trim();

  if (imie === "") {
    wynik.textContent = "Podaj imię";
    return;
  }

  localStorage.setItem("nauka3-imie", imie);
  wynik.textContent = "Zapisano imię";
});