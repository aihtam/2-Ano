function corrigir () {
    let score = 0

    const texto = document.getElementById('texto').value

    //Questão 01
    const Q1 = document.getElementById('Q01').value
    if(Q1 == 'informaticaAndDS'){
        score++
    }

    //Questão 02
    const Q2 = document.getElementById('Q01').value.toLowerCase().trim()
    if(Q2.includes('informatica')){
        score = score + 0.25
    }else if(Q2.includes('enfermagem')){
        score = score + 0.25
    }else if(Q2.includes('administração')){
        score = score + 0.25
    }else if(Q2.includes('des. de sistemas')){
        score = score + 0.25
    }

    //Questão 03
    const check2 = document.getElementById('check2')
    const check4 = document.getElementById('check4')
    if(check2.checked){
        score = score + 0.5
    }
    if(check4.checked){
        score = score + 0.5
    }

    //Questão 04
    const con = document.getElementById('con')
    if(con.checked){
        score++
    }

    //Questão 05
    const Q5 = document.getElementsByName('VF')
    if(Q5.checked){
        score++
    }

    const result = document.getElementById('result')
    const nome = document.getElementById('nome')
    const corretas = document.getElementById('corretas')
    const percentual = document.getElementById('percentual')

    result.classList.remove('hide')
    nome.textContent = texto
    corretas.textContent = score
    percentual.textContent = (score/5)*100
}