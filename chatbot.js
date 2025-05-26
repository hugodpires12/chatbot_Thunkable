// Definir arrays com as keywords
let sintomas = ["vomitos", "colicas", "insonia"]; // [Bloco: inicializar lista]
let perguntas = ["o que devo fazer", "devo ir ao medico"]; // [Bloco: inicializar lista]

// Função para remover acentos e converter para minúsculas
function limparTexto(texto) { // [Thunkable não tem funções personalizadas nos blocos, mas isto pode ser simulado diretamente no fluxo]
  return texto
    .toLowerCase() // [Bloco: texto → converter para minúsculas]
    .normalize("NFD") // [Não disponível nos blocos – substituível com vários 'replace']
    .replace(/[\u0300-\u036f]/g, ""); // [Não disponível diretamente – simular com múltiplos blocos replace: "ó"→"o", "á"→"a", etc.]
}

// Simular o input do utilizador (substituir por TextInput no Thunkable)
let textoUtilizador = "Estou com vómitos, quando devo ir ao medico"; // [Bloco: obter texto do campo de entrada]

// Limpar o texto
let textoLimpo = limparTexto(textoUtilizador); // [Bloco: chamar função de limpeza ou aplicar blocos de texto para minúsculas + replace acentos]

// Procurar keywords nos sintomas
let sintomasEncontrados = []; // [Bloco: inicializar lista vazia]
for (let i = 0; i < sintomas.length; i++) { // [Bloco: repetir para cada item na lista]
  if (textoLimpo.includes(sintomas[i])) { // [Bloco: texto → contém]
    sintomasEncontrados.push(sintomas[i]); // [Bloco: adicionar item à lista]
  }
}

// Procurar keywords nas perguntas
let perguntasEncontradas = []; // [Bloco: inicializar lista vazia]
for (let i = 0; i < perguntas.length; i++) { // [Bloco: repetir para cada item na lista]
  if (textoLimpo.includes(perguntas[i])) { // [Bloco: texto → contém]
    perguntasEncontradas.push(perguntas[i]); // [Bloco: adicionar item à lista]
  }
}

// Construir resultado
let resultado = ""; // [Bloco: inicializar variável de texto com ""]

if (sintomasEncontrados.length > 0 || perguntasEncontradas.length > 0) { // [Bloco: se... ou... então]
  for (let i = 0; i < sintomasEncontrados.length; i++) { // [Bloco: repetir para cada item na lista]
    resultado += sintomasEncontrados[i]; // [Bloco: juntar texto]
    if (perguntasEncontradas.length > 0) { // [Bloco: se... então]
      resultado += " - " + perguntasEncontradas.join(", "); // [Bloco: juntar texto + juntar lista com separador]
    }
    if (i < sintomasEncontrados.length - 1) { // [Bloco: se... então]
      resultado += "; "; // [Bloco: juntar texto]
    }
  }

  // Se só houver perguntas, mas nenhum sintoma
  if (sintomasEncontrados.length === 0 && perguntasEncontradas.length > 0) { // [Bloco: se... e... então]
    resultado += perguntasEncontradas.join("; "); // [Bloco: juntar lista com separador]
  }

  console.log(resultado); // [Bloco: mostrar resultado → console ou label]
} else {
  console.log("erro"); // [Bloco: mostrar resultado → console ou label]
}
