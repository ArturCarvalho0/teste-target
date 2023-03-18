function exe2() {
  let num = document.querySelector("#numInput2").value;
  let a = 0;
  let b = 1;
  let c;

  while (b < num) {
    c = a + b;
    a = b;
    b = c;
  }

  if (b == num && num != 0) {
    document.querySelector(".Resp").innerText =
      "Pertence à sequência de Fibonacci.";
  } else {
    document.querySelector(".Resp").innerText =
      "Não pertence à sequência de Fibonacci.";
  }
}

function exe3() {
  fetch("dados.json")
    .then((resposta) => resposta.json())
    .then((json) => faturamentoMensal(json));
}

function faturamentoMensal(json) {
  const fatMensal = json;

  let menorFat = Infinity;
  let maiorFat = -Infinity;

  let totalFat = 0;
  let numDiasAcimaMedia = 0;

  const diasComFaturamento = fatMensal.filter((dia) => dia.valor > 0);
  const mediaMensal =
    diasComFaturamento.reduce((total, dia) => total + dia.valor, 0) /
    diasComFaturamento.length;

  fatMensal.forEach((dia) => {
    if (dia.valor < menorFat && dia.valor > 0) {
      menorFat = dia.valor;
    }
    if (dia.valor > maiorFat) {
      maiorFat = dia.valor;
    }
    if (dia.valor > mediaMensal) {
      numDiasAcimaMedia++;
    }
    totalFat += dia.valor;
  });
  document.querySelector(".menorFat").innerText =
    "O menor valor de faturamento ocorrido em um dia do mês: $ " +
    menorFat.toFixed(2);
  document.querySelector(".maiorFat").innerText =
    "O maior valor de faturamento ocorrido em um dia do mês: $ " +
    maiorFat.toFixed(2);
  document.querySelector(".numDiasFatAcMed").innerText =
    "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " +
    numDiasAcimaMedia;
}

function exe4() {
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const fatTotal = Object.values(faturamento).reduce(
    (total, valor) => total + valor,
    0
  );

  const percentuais = {};

  for (let estado in faturamento) {
    percentuais[estado] = ((faturamento[estado] / fatTotal) * 100).toFixed(2);
  }
  document.querySelector(".perceSP").innerText =
    "Percentual de SP referente ao total: " + percentuais.SP + "%";
  document.querySelector(".perceRJ").innerText =
    "Percentual de RJ referente ao total: " + percentuais.RJ + "%";
  document.querySelector(".perceMG").innerText =
    "Percentual de MG referente ao total: " + percentuais.MG + "%";
  document.querySelector(".perceES").innerText =
    "Percentual de ES referente ao total: " + percentuais.ES + "%";
  document.querySelector(".perceOUT").innerText =
    "Percentual de outros referente ao total: " + percentuais.Outros + "%";
}

function exe5() {
  const str = document.getElementById("numInput5").value;
  let textoInvertido = "";
  for (let i = str.length - 1; i >= 0; i--) {
    textoInvertido += str[i];
  }
  if (str === "") {
    document.getElementById("Resp5").innerHTML = "campo vazio";
  } else {
    document.getElementById("Resp5").innerHTML = textoInvertido;
  }
}
