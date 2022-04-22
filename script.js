// Criar variavel solicitando o código de barras do pacote
var codigoPacote = prompt("Digite o número do código do seu pacote:") 

// No resultado as 5 trincas vão aparecer separadas
resultado = codigoPacote.split(" ", 5)

// Criar variavel com o nome das trincas
var [codigoRegiaoOrigem, codigoRegiaoDestino, codigoLoggi, codigoVendedor, codigoTipoProduto] = resultado

// Identificação da Região de Origem
var nomeRegiaoOrigem = ""

if (codigoRegiaoOrigem >= 001 && codigoRegiaoOrigem <= 099) {
    nomeRegiaoOrigem = "Sudeste"
} else if (codigoRegiaoOrigem >= 100 && codigoRegiaoOrigem <= 199) {
    nomeRegiaoOrigem = "Sul"
} else if (codigoRegiaoOrigem >= 201 && codigoRegiaoOrigem <= 299) {
    nomeRegiaoOrigem = "Centro-Oeste"
} else if (codigoRegiaoOrigem >= 300 && codigoRegiaoOrigem <= 399) {
    nomeRegiaoOrigem = "Nordeste"
} else if (codigoRegiaoOrigem >= 400 && codigoRegiaoOrigem <= 499) {
    nomeRegiaoOrigem = "Norte"
} else {
  nomeRegiaoOrigem = "de origem inválida"  
}


// Identificação da Região de Destino
var nomeRegiaoDestino = ""

if (codigoRegiaoDestino >= 001 && codigoRegiaoDestino <= 099) {
    nomeRegiaoDestino = "Sudeste"
} else if (codigoRegiaoDestino >= 100 && codigoRegiaoDestino <= 199) {
    nomeRegiaoDestino = "Sul"
} else if (codigoRegiaoDestino >= 201 && codigoRegiaoDestino <= 299) {
    nomeRegiaoDestino = "Centro-Oeste"
} else if (codigoRegiaoDestino >= 300 && codigoRegiaoDestino <= 399) {
    nomeRegiaoDestino = "Nordeste"
} else if (codigoRegiaoDestino >= 400 && codigoRegiaoDestino <= 499) {
    nomeRegiaoDestino = "Norte"
} else {
  nomeRegiaoDestino = "de destino inválida"  
}


// Conferência do Codigo Loggi
if (codigoLoggi != 555) {
    codigoLoggi = "Inválido"
}



// Identificação do código do vendedor do produto
if (codigoVendedor == 367) {
    codigoVendedor = "CNPJ Inativo"
}



// Verificar o tipo de produto
var nomeTipoProduto = ""

if (codigoTipoProduto == 001) {
    nomeTipoProduto = "Jóias"
} else if (codigoTipoProduto == 111) {
    nomeTipoProduto = "Livros"
} else if (codigoTipoProduto == 333) {
    nomeTipoProduto = "Eletrônicos" 
} else if (codigoTipoProduto == 555) {
    nomeTipoProduto = "Bebidas"
} else if (codigoTipoProduto == 888) {
    nomeTipoProduto = "Brinquedos"
} else {
    nomeTipoProduto = "Tipo de produto inválido"
}



// Retorno geral das informações
console.log(`Código: ${codigoPacote} 
    \nRegião de origem: Cidade ${codigoRegiaoOrigem}, região ${nomeRegiaoOrigem}
    \nRegião de destino: Cidade ${codigoRegiaoDestino}, região ${nomeRegiaoDestino}
    \nCódigo Loggi: ${codigoLoggi}
    \nCódigo do vendedor do produto: ${codigoVendedor}
    \nTipo de produto: ${nomeTipoProduto}
`)


// Código: 033 334 555 999 000
// Região de origem: Cidade 33, região Sudeste
// Região de destino: Cidade 334, região Nordeste
// Código Loggi: 555
// Código do vendedor do produto: 999
// Tipo do produto: Jóias