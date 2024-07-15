const birthdate = document.querySelector("#birthdate");
const calculatorBtn = document.querySelector("#calculateBtn");
const result = document.querySelector("h2");

calculatorBtn.onclick = function () {
  const birthValue = birthdate.value;
  let age = new Date();
  if (birthValue === "") {
    alert("Boş bırakmayınız...");
  } else {
    const birthDate = new Date(birthValue);
    let sonuc = age.getFullYear() - birthDate.getFullYear();
    result.innerHTML = `Your age is ${sonuc} years old.`;
  }
};
