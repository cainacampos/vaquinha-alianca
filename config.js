// ============================================================
// 💍 CONFIGURAÇÃO DA SUA VAQUINHA DAS ALIANÇAS
// ============================================================
// Sempre que receber um Pix, basta abrir este arquivo, alterar
// o valorArrecadado (e adicionar o nome em apoiadores se quiser)
// e fazer o commit no GitHub. O site atualiza sozinho!

window.VAQUINHA_CONFIG = {
  // Informações da página
  titulo: "Vaquinha da Nossa Aliança 💍",
  subtitulo: "Ajude-nos a desbloquear a melhor aliança para o nosso casamento! Cada contribuição melhora a qualidade da joia.",
  chavePix: "cainaemarilia@gmail.com",

  // 👉 ALTERE AQUI CONFORME AS CONTRIBUIÇÕES CHEGAREM:
  valorArrecadado: 50,

  // Níveis de evolução da aliança (estilo stretch goals do Catarse)
  niveis: [
    {
      valor: 500,
      icone: "💍",
      nome: "Aliança Básica de Prata 950",
      descricao: "Simples, bonita e simbólica para selar o nosso amor."
    },
    {
      valor: 1200,
      icone: "✨💍",
      nome: "Aliança de Ouro 10k Anatômica",
      descricao: "Mais resistente, confortável no dedo e já tem o brilho do ouro!"
    },
    {
      valor: 2500,
      icone: "🌟💍✨",
      nome: "Aliança Ouro 18k Tradicional",
      descricao: "O clássico ouro maciço 18k que dura a vida inteira sem perder o brilho."
    },
    {
      valor: 5000,
      icone: "👑💎💍",
      nome: "Aliança Premium 18k com Brilhante/Diamante",
      descricao: "A versão dos sonhos! Ouro 18k reforçado com pedra de diamante cravada."
    }
  ],

  // Lista de quem já ajudou (opcional, adicione novos conforme quiser)
  apoiadores: [
    { nome: "Tio Carlos", recado: "Felicidades ao casal!" },
  ]
};
