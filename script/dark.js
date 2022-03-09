const tombol = document.querySelector("#tombol");
const a = document.querySelectorAll("a");
const bulan = document.getElementById("tombol");
const profile = document.querySelector("img");
tombol.onclick = function () {
  profile.classList.toggle("kotak");
  profile.classList.toggle("putih");
  bulan.classList.toggle("hitam");
  bulan.classList.toggle("tombol");
  document.body.classList.toggle("dark-mode");
  a.forEach((el) => el.classList.toggle("dark-mode2"));
};
