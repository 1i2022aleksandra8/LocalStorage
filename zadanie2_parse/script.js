const poleJson = document.querySelector("#json");
const przycisk = document.querySelector("#parsuj");
const wynik = document.querySelector("#wynik");

przycisk.addEventListener("click", function () {
  try {
    const obj = JSON.parse(poleJson.value);

    wynik.textContent = "Nazwa: " + obj.nazwa + "\nCena: " + obj.cena;
  } catch (e) {
    wynik.textContent = "Niepoprawny JSON";
  }
});