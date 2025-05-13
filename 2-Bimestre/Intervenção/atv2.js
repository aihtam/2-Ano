const website = {
    titulo              : 'Sistema de Avaliação Online',
    url                 : 'https://www.sistemaOnlineAv.com.br',
    tags                : [
        'Biologia',
        'História',
        'Matemática',
        'Português'
    ],
    disciplinasTecnicas : {
        adm             : ['Direito do Consumidor', 'Marketing'],
        info            : ['HTML', 'PHP', 'JavaScript'],
        enf             : ['Saúde da Mulher', 'Primeiros Socorros']
    },
    escola              : function (){
        return 'EEEP Amélia Figueiredo'
    }  
}

console.log(`Título do site : ${website.titulo}\nurl do site : ${website.url}\nterceira disciplina : ${website.tags[2]}\nsegundo curso de administração : ${website.disciplinasTecnicas.adm[1]}\nnome da escola : ${website.escola()}`)
