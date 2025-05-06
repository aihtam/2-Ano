function calculoEstoqueF(element1, element2, element3) {
    element2 = {
        celular : element1.celular - element3.celular,
        fone : element1.fone - element3.fone,
        pendrive : element1.pendrive - element3.pendrive,
        caixa : element1.caixa - element3.caixa,
        tablet : element1.tablet - element3.caixa,
        carregador : element1.carregador - element3.carregador
    }

    for(let i = 0; i < produtos.lenght; i++){
        element2.celular = element1[produtos[i]] - element3[produtos[i]]
    }

    console.log(element2)
}
const produtos = Object.keys(estoqueI)

const estoqueF = {}

const estoqueI = {
    celular : 150,
    fone : 55,
    pendrive : 37,
    caixa : 28,
    tablet : 32,
    carregador : 29
}

const vendas = {
    celular : 38,
    fone : 10,
    pendrive : 17,
    caixa : 8,
    tablet : 5,
    carregador : 15
}

calculoEstoqueF(estoqueI, estoqueF, vendas)