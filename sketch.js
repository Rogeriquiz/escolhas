let suaidade;
let arcade;
let ação;
let simulação;
let título;
let corpo;
let jogos = {
  menor10: {
    arcade: "Subway Surfers",
    ação: "Super Mario Odyssey",
    simulação: "Animal Crossing"
  },
  entre10e14: {
    arcade: "Street Fighter 2",
    ação: "Overwatch",
    simulação: "Stardew Valley"
  },
  entre14e16: {
    arcade: "Forza Horizon 5",
    ação: "Fortnite",
    simulação: "Menor Aprendiz SENAI Edition"
  },
  entre16e18: {
    arcade: "Need For Speed Heat",
    ação: "Call of Duty: Modern Warfare 3",
    simulação: "Gran Turismo 7"
  },
  maior18: {
    arcade: "Mortal Kombat 1",
    ação: "GTA IV",
    simulação: "Sai da web e vai conviver"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(659,530).addClass("hidden");
  suaidade = createInput("").position(630,585).addClass("hidden");
  ação = createCheckbox("Gosta de jogos de ação? ⌨🖱").position(100,600).addClass("hidden");
  arcade = createCheckbox("Gosta de jogos arcade? 🎮").position(100,650).addClass("hidden");
  simulação = createCheckbox("Gosta de jogos de simulação? 😏").position(100,700).addClass("hidden");
 título = "Bungee Tint";
 corpo = "Nerko One";
  button = createButton("APERTA MEU BOTÃO😩").position(width/2,480);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota(){
  selectAll(".hidden").forEach((el) =>el.removeClass("hidden"));
  button.hide();
}

function draw() {
  background("rgb(252,248,248)");
  fill("rgb(134,74,74)")
  textAlign(CENTER,CENTER);
  textSize(40);
  text("2º MELHOR INDICADOR DE JOGOS", width/2, 30);
  textFont(corpo);
  
  
  
  let idade = parseInt(suaidade.value());
  let checkarcade = arcade.checked();
  let checkação = ação.checked();
  let checksimulação = simulação.checked();
  let jogo = "Insira suas preferências";
  if (suaidade.value() !==""){
    jogo = mostrajogo(idade, checkarcade, checkação, checksimulação);
  }
  fill("rgb(37,34,34)");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
  textFont(título);
}

function mostrajogo(idade, checkarcade, checkação, checksimulação){
 if (isNaN(idade)){
   return "Idade Invalida";
 } else if (idade < 5){
       return "O que você está fazendo aqui? 🤨"
   }else if (idade > 120){
       return "Você é estranho, vê se morre logo"
     }
  if (idade >= 5 && idade < 10){
    if (checkarcade){
      return jogos["menor10"]["arcade"];
    }
    if (checkação){
      return jogos["menor10"]["ação"];
    }
    if (checksimulação){
      return jogos["menor10"]["simulação"];
    }
  }
  else if (idade >= 10 && idade < 14){
    if (checkarcade){
      return jogos["entre10e14"]["arcade"];
    }
    if (checkação){
      return jogos["entre10e14"]["ação"];
    }
    if (checksimulação){
      return jogos["entre10e14"]["simulação"];
    }
  }
  else if (idade >= 14 && idade < 16){
    if (checkarcade){
      return jogos["entre14e16"]["arcade"];
    }
    if (checkação){
      return jogos["entre14e16"]["ação"];
    }
    if (checksimulação){
      return jogos["entre14e16"]["simulação"];
    }
  }
  else if (idade >= 16 && idade < 18){
    if (checkarcade){
      return jogos["entre16e18"]["arcade"];
    }
    if (checkação){
      return jogos["entre16e18"]["ação"];
    }
    if (checksimulação){
      return jogos["entre16e18"]["simulação"];
    }
  }
  else if (idade > 18){
    if (checkarcade){
      return jogos["maior18"]["arcade"];
    }
    if (checkação){
      return jogos["maior18"]["ação"];
    }
    if (checksimulação){
      return jogos["maior18"]["simulação"];
    }
  }
}