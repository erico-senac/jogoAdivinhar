// gerar um numero
// verificar o acerto do chute
const minimo = 1;
let maximo = 1000;
let numeroSecreto;
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
const cChute = document.querySelector('.chute');


spanMin.innerHTML = `<strong> ${minimo}</strong>`;
spanMax.innerHTML = `<strong> ${maximo}</strong>`;
contTentativa.textContent = tentativa;

link.innerHTML = "<a href='https://pi.senac.br' target='_blank'>Site SENAC </a>";

const gerarNumeroSecreto = () => {
  return parseInt(Math.random() * maximo * 10) % maximo + minimo;
}
numeroSecreto = gerarNumeroSecreto();

const desabilitar = () => {
    btnChute.setAttribute('disabled','');
    chute.setAttribute('disabled','');
}

const btnTenteOutraVez = () => {
  btn = document.createElement('button');
  btn.setAttribute('type','submit');
  btn.textContent = 'Tente Outra Vez';
  btn.addEventListener('click', () => window.location.reload());
  cChute.appendChild(btn);
}

chute.addEventListener('keypress', (e) => {
  if(e.code === 'Enter')
    verificaChute();
});

const verificaChute = () => {
  if (parseInt(chute.value) === numeroSecreto) {
    resultado.innerHTML = "Você acertou!";
    desabilitar();
    btnTenteOutraVez();
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
    resultado.innerHTML = `Você perdeu! - Numero Secreto é ${numeroSecreto}`;
    desabilitar();
    btnTenteOutraVez();
  }
};

btnChute.addEventListener("click", verificaChute);
limite.addEventListener("keypress",(event) => {
  event.preventDefault();
  if(!isNaN(event.key) && event.code !== 'Space'){
    if(!isNaN(event.key) && event.target.value.length < 4){
      event.target.value += event.key;
    }
  }
  if(event.key === 'Enter' || event.key === 'Tab'){
    maximo = parseInt(event.target.value);
    spanMax.innerHTML = `<strong> ${maximo}</strong>` ;
    numeroSecreto = gerarNumeroSecreto();
  }
});

qTetativas.addEventListener('keypress',(event)=>{
  event.preventDefault();
   if(!isNaN(event.key) && event.code !== 'Space'){
    if(!isNaN(event.key) && event.target.value.length < 4){
      event.target.value += event.key;
    }
  }
  if(event.key === 'Enter' || event.key === 'Tab'){
    tentativa = parseInt(event.target.value);
    contTentativa.innerHTML = `<strong> ${tentativa}</strong>` ;
  }
});
