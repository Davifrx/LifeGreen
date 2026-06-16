const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: "SUA_CHAVE_API_AQUI", 
});

async function gerarRecomendacaoInteligente() {
  const perfilCliente = {
    nome: "Davi Freitas",
    preferencias: "Produtos 100% orgânicos, sem agrotóxicos e de origem vegana",
    cidade: "São Paulo - SP"
  };

  const produtosDisponiveis = [
    { id: 1, nome: "Tomate Orgânico do Produtor João", categoria: "Hortifrúti", local: "Atibaia - SP" },
    { id: 2, nome: "Mel Puro de Abelha Silvestre", categoria: "Mercearia", local: "Minas Gerais" },
    { id: 3, nome: "Sabonete Artesanal Vegano de Lavanda", categoria: "Cosméticos", local: "São Paulo - SP" }
  ];

  const prompt = `
Você é o motor de recomendação inteligente do marketplace sustentável LifeGreen.
Baseado no perfil do cliente e na lista de produtos disponíveis em estoque, recomende o(s) melhor(es) produto(s).
Regras cruciais: Priorize a proximidade geográfica com a cidade do cliente para reduzir a pegada de carbono e atenda aos gostos dele.

Dados do Cliente: ${JSON.stringify(perfilCliente)}
Produtos em Estoque: ${JSON.stringify(produtosDisponiveis)}

Retorne a resposta final com uma justificativa curta, amigável e focada em sustentabilidade.
`;

  console.log("Conectando à API da OpenAI e processando dados simulados do LifeGreen...");

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    console.log("\n--- RECOMENDAÇÃO GERADA PELA IA (SIMULAÇÃO) ---");
    console.log(response.choices[0].message.content);

  } catch (error) {
    console.error("Erro ao conectar com o serviço de IA:", error.message);
  }
}

gerarRecomendacaoInteligente();