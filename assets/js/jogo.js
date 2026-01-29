// gerar um numero
// verificar o acerto do chute
const minimo = 1;
const maximo = 1000;
const numeroSecreto = parseInt(Math.random() * maximo * 10) % maximo + minimo;
let tentativa = 3;

const spanMin = document.querySelector('#minimo');
const spanMax = document.querySelector("#maximo");
const chute = document.querySelector("#chute");
const btnChute = document.querySelector("#btnChute");
const resultado = document.querySelector("#resultado");
const contTentativa = document.querySelector("#tentativa");
const link = document.querySelector('#link');
const qTetativas = document.querySelector('#qtentativas');
const limite = document.querySelector('#limite');

spanMin.innerHTML = `<strong> ${minimo}</strong>`;
spanMax.innerHTML = `<strong> ${maximo}</strong>`;
contTentativa.textContent = tentativa;

link.innerHTML = "<a href='https://pi.senac.br' target='_blank'>Site SENAC </a>";

const verificaChute = () => {
  if (parseInt(chute.value) === numeroSecreto) {
    resultado.innerHTML = "Você acertou!";
  } else if (parseInt(chute.value) > numeroSecreto) {
    resultado.innerHTML = "Menor!";
    contTentativa.innerHTML = --tentativa;
    chute.value = "";
  } else if (parseInt(chute.value) < numeroSecreto) {
    resultado.innerHTML = "Maior!";
    contTentativa.innerHTML = --tentativa;
    chute.value = "";
  }
  if (tentativa == 0) {
    resultado.innerHTML = "Você perdeu!";
    btnChute.setAttribute('disabled','');
    chute.setAttribute('disabled','');
    // btnChute.classList.add('desabilitar');
    // chute.classList.add('desabilitar');
  }
};

btnChute.addEventListener("click", verificaChute);

