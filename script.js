
const frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite em si mesmo e tudo será possível.",
    "Não espere por oportunidades, crie-as.",
    "A persistência é o caminho para o sucesso.",
    "Você é mais forte do que imagina.",
    "Sonhe grande, trabalhe duro e seja grato.",
    "O fracasso é apenas uma oportunidade de recomeçar com mais inteligência.",
    "A jornada de mil milhas começa com um único passo.",
    "Confie no processo e nunca desista.",
    "Você é o autor da sua própria história.",
    "Seja a mudança que você deseja ver no mundo.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "Cada dia é uma nova oportunidade para recomeçar.",
    "Você nunca é velho demais para estabelecer um novo objetivo.",
    "Faça o melhor que puder até saber mais, então faça melhor ainda.",
    "Acredite: você é capaz de coisas incríveis.",
    "O impossível é apenas uma opinião.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "Errar é o primeiro passo para aprender e crescer.",
    "Pequenos passos levam a grandes conquistas.",
    "Seu potencial é ilimitado, use-o com coragem.",
    "Tudo o que você precisa para começar já está dentro de você.",
    "Seja grato pelas pequenas vitórias.",
    "Você não precisa ver o topo da escada, apenas dê o próximo passo.",
    "A felicidade é uma jornada, não um destino.",
    "Aprenda a dançar com os desafios da vida.",
    "Cair faz parte, levantar é uma escolha.",
    "Nunca subestime o poder dos seus sonhos.",
    "O tempo investido em você nunca será perdido.",
    "Tenha fé no processo e paciência nos resultados.",
    "O único limite para o sucesso é a sua mente.",
    "A força cresce nos momentos em que você pensa em desistir.",
    "Você nunca falha, ou você ganha ou aprende.",
    "O segredo do progresso é começar.",
    "A energia que você transmite atrai coisas semelhantes.",
    "Todo desafio é uma oportunidade disfarçada.",
    "Tenha coragem de ser a melhor versão de si mesmo.",
    "Mesmo a noite mais escura termina com o amanhecer.",
    "Você é o criador do seu próprio destino.",
    "Hoje é um ótimo dia para fazer algo incrível."
  ];
  
  const fraseElement = document.getElementById('frase');
  const botao = document.getElementById('gerar-frase');
  
  // Função para gerar a frase aleatória
  function gerarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    fraseElement.textContent = frases[indiceAleatorio];
  }
  
  // Adicionar o evento de clique ao botão
  botao.addEventListener('click', gerarFrase);
  