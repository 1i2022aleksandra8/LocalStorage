const produkt = {
  nazwa: "Mleko 2%",
  cena: 3.5
};

const przycisk = document.querySelector("#pokaz");
const wynik = document.querySelector("#wynik");

przycisk.addEventListener("click", function () {
  const napis = JSON.stringify(produkt);
  wynik.textContent = napis;
});