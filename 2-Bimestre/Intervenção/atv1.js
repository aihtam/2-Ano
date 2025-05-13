function calculoEstoqueF(element1,element2) {

    const estoqueF = {}

    const produtos = Object.keys(element1)

    for(let i = 0; i < produtos.length; i++){
        const produto = produtos[i]
        estoqueF[produto] = element1[produto] - element2[produto]
    }

    console.log(estoqueF)
}

const estoqueI = {
    celular    : 150,
    fone       :  55,
    pendrive   :  37,
    caixa      :  28,
    tablet     :  32,
    carregador :  29
}

const vendas = {
    celular : 38,
    fone : 10,
    pendrive : 17,
    caixa : 8,
    tablet : 5,
    carregador : 15
}

calculoEstoqueF(estoqueI, vendas)