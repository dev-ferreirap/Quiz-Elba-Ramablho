/* =========================================================
   BANCO DE PERGUNTAS
   Cada pergunta é um objeto com:
   - question: o texto da pergunta
   - options: array com as 4 alternativas (nessa ordem elas
     aparecem na tela)
   - answer: o ÍNDICE (0, 1, 2 ou 3) da alternativa correta
     dentro do array "options"
   ========================================================= */

const perguntas = [
  {
    question: "Em qual cidade Elba Ramalho nasceu?",
    options: ["Campina Grande", "Conceição (Vale do Piancó)", "João Pessoa", "Recife"],
    answer: 1
  },
  {
    question: "Em que ano Elba Ramalho nasceu?",
    options: ["1948", "1951", "1955", "1960"],
    answer: 1
  },
  {
    question: "Em qual estado brasileiro fica a cidade natal de Elba Ramalho?",
    options: ["Pernambuco", "Ceará", "Paraíba", "Bahia"],
    answer: 2
  },
  {
    question: "Para qual cidade a família de Elba se mudou em 1962?",
    options: ["Recife", "Campina Grande", "João Pessoa", "Natal"],
    answer: 1
  },
  {
    question: "Qual curso Elba fez na Universidade Federal da Paraíba?",
    options: ["Direito", "Sociologia", "Medicina", "Engenharia"],
    answer: 1
  },
  {
    question: "Qual grupo musical feminino Elba formou na universidade?",
    options: ["As Frevistas", "As Brasas", "As Baianas", "As Cigarras"],
    answer: 1
  },
  {
    question: "Em que ano Elba se mudou definitivamente para o Rio de Janeiro?",
    options: ["1970", "1974", "1980", "1983"],
    answer: 1
  },
  {
    question: "Com qual grupo Elba viajou ao Rio de Janeiro como crooner?",
    options: ["Quinteto Violado", "Novos Baianos", "O Rappa", "Trio Nordestino"],
    answer: 0
  },
  {
    question: "Elba Ramalho é prima de qual cantor nordestino famoso?",
    options: ["Alceu Valença", "Dominguinhos", "Zé Ramalho", "Geraldo Azevedo"],
    answer: 2
  },
  {
    question: "Em qual peça de Chico Buarque Elba atuou em 1978?",
    options: ["Roda Viva", "Ópera do Malandro", "Gota D'água", "Calabar"],
    answer: 1
  },
  {
    question: "Qual foi o primeiro álbum de estúdio de Elba, lançado em 1979?",
    options: ["Coração Brasileiro", "Ave de Prata", "Leão do Norte", "Balaio de Amor"],
    answer: 1
  },
  {
    question: "Com qual gravadora Elba assinou seu primeiro contrato?",
    options: ["Sony Music", "CBS", "Warner", "Universal"],
    answer: 1
  },
  {
    question: "Qual álbum de 1983 trouxe o grande sucesso 'Banho de Cheiro'?",
    options: ["Ave de Prata", "Leão do Norte", "Coração Brasileiro", "O Grande Encontro"],
    answer: 2
  },
  {
    question: "Quem compôs a música 'Banho de Cheiro'?",
    options: ["Zé Ramalho", "Carlos Fernando", "Lenine", "Dominguinhos"],
    answer: 1
  },
  {
    question: "O álbum 'Coração Brasileiro' vendeu mais de quantas cópias?",
    options: ["100 mil", "500 mil", "1 milhão", "5 milhões"],
    answer: 2
  },
  {
    question: "Qual apelido é frequentemente associado a Elba Ramalho?",
    options: ["A Rainha do Frevo", "A Rainha do Forró", "A Dama do Samba", "A Musa do Axé"],
    answer: 1
  },
  {
    question: "Em 1996, qual disco marcou o retorno de Elba às raízes nordestinas?",
    options: ["Leão do Norte", "Balaio de Amor", "Ave de Prata", "Xodó do Vaqueiro"],
    answer: 0
  },
  {
    question: "Quem compôs a música-título do álbum 'Leão do Norte'?",
    options: ["Zé Ramalho", "Alceu Valença", "Lenine", "Chico Buarque"],
    answer: 2
  },
  {
    question: "'O Grande Encontro' foi um álbum ao vivo gravado com quais artistas?",
    options: [
      "Alceu Valença, Geraldo Azevedo e Zé Ramalho",
      "Gilberto Gil e Caetano Veloso",
      "Luiz Gonzaga e Jackson do Pandeiro",
      "Chico Buarque e Milton Nascimento"
    ],
    answer: 0
  },
  {
    question: "Qual apelido ligado ao Nordeste foi usado numa homenagem a Elba no Carnaval do Recife em 2025?",
    options: ["Leoa do Norte", "Filha do Sertão", "Rainha do Frevo", "Estrela do Piancó"],
    answer: 0
  },
  {
    question: "Quem é o pai do filho de Elba, Luã Yvis?",
    options: ["Maurício Mattar", "Zé Ramalho", "Alceu Valença", "Cezinha"],
    answer: 0
  },
  {
    question: "Em qual ano Elba se apresentou grávida no Carnaval de Recife, sem saber ainda?",
    options: ["1983", "1987", "1990", "1996"],
    answer: 1
  },
  {
    question: "Em 2009, o CD 'Balaio de Amor' celebrou quantos anos de carreira de Elba na MPB?",
    options: ["20 anos", "25 anos", "30 anos", "40 anos"],
    answer: 2
  },
  {
    question: "Qual gênero musical nordestino é mais associado à carreira de Elba Ramalho?",
    options: ["Forró", "Axé", "Sertanejo", "Samba-Reggae"],
    answer: 0
  },
  {
    question: "Além de cantora, quais outras atividades artísticas Elba Ramalho exerceu?",
    options: ["Apenas cantora", "Atriz e compositora", "Apenas dançarina", "Apenas produtora musical"],
    answer: 1
  }
];

/* =========================================================
   VARIÁVEIS DE CONTROLE
   Guardam o "estado atual" do jogo enquanto o usuário joga.
   ========================================================= */
let perguntaAtual = 0;   // índice da pergunta que está sendo exibida
let pontuacao = 0;       // pontos acumulados
let nicknameJogador = ""; // nome informado pelo jogador
let jaRespondeu = false; // trava para não deixar responder 2x a mesma pergunta

/* =========================================================
   REFERÊNCIAS AOS ELEMENTOS DO HTML
   Buscamos uma vez só e guardamos em variáveis, em vez de
   ficar chamando document.getElementById toda hora.
   ========================================================= */
const telaInicial = document.getElementById("tela-inicial");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");
const telaRanking = document.getElementById("tela-ranking");

const inputNickname = document.getElementById("nickname");
const erroNickname = document.getElementById("erro-nickname");
const btnComecar = document.getElementById("btn-comecar");

const numeroPerguntaEl = document.getElementById("numero-pergunta");
const pontuacaoAtualEl = document.getElementById("pontuacao-atual");
const barraPreenchida = document.getElementById("barra-preenchida");
const textoPerguntaEl = document.getElementById("texto-pergunta");
const listaAlternativas = document.getElementById("lista-alternativas");
const btnProxima = document.getElementById("btn-proxima");

const resultadoNicknameEl = document.getElementById("resultado-nickname");
const resultadoPontuacaoEl = document.getElementById("resultado-pontuacao");
const resultadoPorcentagemEl = document.getElementById("resultado-porcentagem");
const resultadoMensagemEl = document.getElementById("resultado-mensagem");
const btnVerRanking = document.getElementById("btn-ver-ranking");

const listaRankingEl = document.getElementById("lista-ranking");
const btnJogarNovamente = document.getElementById("btn-jogar-novamente");
const btnVoltarInicio = document.getElementById("btn-voltar-inicio");

const CHAVE_RANKING = "elbaQuizRanking"; // chave usada no localStorage

/* =========================================================
   EVENTO: clique no botão "Começar Quiz"
   ========================================================= */
btnComecar.addEventListener("click", iniciarQuiz);

/* =========================================================
   FUNÇÃO: iniciarQuiz()
   Valida o nickname e, se estiver ok, esconde a tela inicial
   e mostra a tela do quiz, exibindo a primeira pergunta.
   ========================================================= */
function iniciarQuiz() {
  const valor = inputNickname.value.trim();

  // Validação: não deixar começar com nickname vazio
  if (valor === "") {
    erroNickname.classList.remove("hidden");
    inputNickname.focus();
    return; // interrompe a função aqui, não deixa continuar
  }

  // Nickname válido: guarda e esconde a mensagem de erro (se estava visível)
  nicknameJogador = valor;
  erroNickname.classList.add("hidden");

  // Reinicia o estado do jogo (importante para o "Jogar Novamente" funcionar depois)
  perguntaAtual = 0;
  pontuacao = 0;

  // Troca de tela: esconde a inicial, mostra a do quiz
  telaInicial.classList.add("hidden");
  telaQuiz.classList.remove("hidden");

  mostrarPergunta();
}

/* =========================================================
   FUNÇÃO: mostrarPergunta()
   Pega a pergunta atual (pelo índice "perguntaAtual") e
   desenha o texto, as 4 alternativas e atualiza o progresso.
   ========================================================= */
function mostrarPergunta() {
  jaRespondeu = false;
  btnProxima.disabled = true;

  const pergunta = perguntas[perguntaAtual];

  // Atualiza cabeçalho: "Pergunta X de 25" e pontuação
  numeroPerguntaEl.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
  pontuacaoAtualEl.textContent = `Pontos: ${pontuacao}`;

  // Atualiza a barra de progresso (em %)
  const progresso = ((perguntaAtual) / perguntas.length) * 100;
  barraPreenchida.style.width = `${progresso}%`;

  // Escreve o texto da pergunta
  textoPerguntaEl.textContent = pergunta.question;

  // Limpa as alternativas da pergunta anterior e cria as novas
  listaAlternativas.innerHTML = "";

  pergunta.options.forEach(function (opcaoTexto, indice) {
    const botao = document.createElement("button");
    botao.classList.add("alternativa");
    botao.textContent = opcaoTexto;

    // Guardamos o índice da opção no próprio botão, para saber
    // depois qual alternativa foi clicada
    botao.dataset.indice = indice;

    botao.addEventListener("click", function () {
      selecionarResposta(indice, botao);
    });

    listaAlternativas.appendChild(botao);
  });
}

/* =========================================================
   FUNÇÃO: selecionarResposta(indice, botao)
   Chamada quando o usuário clica em uma alternativa.
   - indice: posição da alternativa clicada (0 a 3)
   - botao: o elemento <button> que foi clicado
   ========================================================= */
function selecionarResposta(indice, botao) {
  // Trava: se já respondeu essa pergunta, ignora novos cliques
  if (jaRespondeu) return;
  jaRespondeu = true;

  const pergunta = perguntas[perguntaAtual];
  const indiceCorreto = pergunta.answer;

  // Pega todos os botões de alternativa gerados nesta pergunta
  const todosBotoes = listaAlternativas.querySelectorAll(".alternativa");

  todosBotoes.forEach(function (botaoAtual) {
    // Desabilita todas as alternativas após a resposta
    botaoAtual.disabled = true;

    const indiceDoBotao = Number(botaoAtual.dataset.indice);

    // Marca a alternativa correta em verde, sempre
    if (indiceDoBotao === indiceCorreto) {
      botaoAtual.classList.add("correta");
    }
  });

  // Se o usuário errou, marca a que ele clicou em vermelho
  if (indice !== indiceCorreto) {
    botao.classList.add("incorreta");
  } else {
    // Acertou: soma ponto e atualiza o placar na tela
    pontuacao++;
    pontuacaoAtualEl.textContent = `Pontos: ${pontuacao}`;
  }

  // Destaca visualmente qual foi a alternativa clicada
  botao.classList.add("selecionada");

  // Libera o botão de avançar para a próxima pergunta
  btnProxima.disabled = false;
}

/* =========================================================
   EVENTO: clique no botão "Próxima Pergunta"
   ========================================================= */
btnProxima.addEventListener("click", proximaPergunta);

/* =========================================================
   FUNÇÃO: proximaPergunta()
   Avança o índice da pergunta. Se ainda houver perguntas,
   mostra a próxima; senão, encerra o quiz.
   ========================================================= */
function proximaPergunta() {
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    finalizarQuiz();
  }
}

/* =========================================================
   FUNÇÃO: finalizarQuiz()
   Chamada quando não há mais perguntas. Calcula a
   porcentagem de acertos, escreve o resultado na tela,
   monta uma mensagem final e salva o resultado no ranking.
   ========================================================= */
function finalizarQuiz() {
  telaQuiz.classList.add("hidden");
  telaResultado.classList.remove("hidden");

  const total = perguntas.length;
  const porcentagem = Math.round((pontuacao / total) * 100);

  resultadoNicknameEl.textContent = `Nickname: ${nicknameJogador}`;
  resultadoPontuacaoEl.textContent = `Pontuação: ${pontuacao} / ${total}`;
  resultadoPorcentagemEl.textContent = `Porcentagem de acertos: ${porcentagem}%`;

  // Mensagem final simples, de acordo com a faixa de pontuação
  let mensagem;
  if (porcentagem === 100) {
    mensagem = "Perfeito! Você conhece a fundo a trajetória de Elba Ramalho.";
  } else if (porcentagem >= 70) {
    mensagem = "Muito bem! Você manda bem sobre a carreira da Elba Ramalho.";
  } else if (porcentagem >= 40) {
    mensagem = "Nada mal! Ainda dá pra conhecer mais sobre a Elba Ramalho.";
  } else {
    mensagem = "Vale a pena conhecer mais a trajetória da Elba Ramalho e tentar de novo.";
  }
  resultadoMensagemEl.textContent = mensagem;

  salvarResultado(pontuacao, porcentagem);
}

/* =========================================================
   FUNÇÃO: salvarResultado(pontos, porcentagem)
   Monta o registro do jogador e salva no localStorage,
   já ordenando o ranking por maior pontuação (e, em caso
   de empate, pela data da partida como critério secundário).
   ========================================================= */
function salvarResultado(pontos, porcentagem) {
  const ranking = carregarRanking();

  ranking.push({
    nickname: nicknameJogador,
    pontuacao: pontos,
    porcentagem: porcentagem,
    data: new Date().toISOString()
  });

  ranking.sort(function (a, b) {
    if (b.pontuacao !== a.pontuacao) {
      return b.pontuacao - a.pontuacao; // maior pontuação primeiro
    }
    return new Date(a.data) - new Date(b.data); // empate: partida mais antiga primeiro
  });

  localStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking));
}

/* =========================================================
   FUNÇÃO: carregarRanking()
   Lê o ranking salvo no localStorage. Se nunca foi salvo
   nada, retorna um array vazio (em vez de dar erro).
   ========================================================= */
function carregarRanking() {
  const dadosSalvos = localStorage.getItem(CHAVE_RANKING);
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}

/* =========================================================
   FUNÇÃO: mostrarRanking()
   Esconde as outras telas, monta a lista do ranking na
   tela e mostra.
   ========================================================= */
function mostrarRanking() {
  telaResultado.classList.add("hidden");
  telaQuiz.classList.add("hidden");
  telaRanking.classList.remove("hidden");

  const ranking = carregarRanking();
  listaRankingEl.innerHTML = "";

  if (ranking.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Nenhum resultado registrado ainda.";
    listaRankingEl.appendChild(item);
    return;
  }

  ranking.forEach(function (jogador, indice) {
    const item = document.createElement("li");
    const dataFormatada = new Date(jogador.data).toLocaleDateString("pt-BR");

    const posicaoENome = document.createElement("span");
    posicaoENome.textContent = `${indice + 1}º ${jogador.nickname}`;

    const pontuacaoEData = document.createElement("span");
    pontuacaoEData.textContent = `${jogador.pontuacao}/${perguntas.length} (${dataFormatada})`;

    item.appendChild(posicaoENome);
    item.appendChild(pontuacaoEData);
    listaRankingEl.appendChild(item);
  });
}

/* =========================================================
   EVENTO: clique em "Ver Ranking" (tela de resultado)
   ========================================================= */
btnVerRanking.addEventListener("click", mostrarRanking);

/* =========================================================
   FUNÇÃO: jogarNovamente()
   Reinicia o estado do quiz e começa direto uma nova
   partida, reaproveitando o nickname já informado.
   ========================================================= */
function jogarNovamente() {
  perguntaAtual = 0;
  pontuacao = 0;

  telaRanking.classList.add("hidden");
  telaResultado.classList.add("hidden");
  telaQuiz.classList.remove("hidden");

  mostrarPergunta();
}
btnJogarNovamente.addEventListener("click", jogarNovamente);

/* =========================================================
   FUNÇÃO: reiniciarQuiz()
   Volta para a tela inicial "do zero": limpa o nickname
   e o estado do jogo, permitindo trocar de jogador.
   ========================================================= */
function reiniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  nicknameJogador = "";
  inputNickname.value = "";
  erroNickname.classList.add("hidden");

  telaRanking.classList.add("hidden");
  telaResultado.classList.add("hidden");
  telaQuiz.classList.add("hidden");
  telaInicial.classList.remove("hidden");
}
btnVoltarInicio.addEventListener("click", reiniciarQuiz);
