var estruturageral = {
    mensagemfinal: {
        positiva: [
            "Muito bem! Você arrasou!",
            "Se você quiser, você pode praticar novamente clicando no botão abaixo."
        ],
        negativa: [
            "Foi por pouco!",
            "Talvez seja interessante revisar o conteúdo e tentar de novo.",
            "Para reiniciar, basta clicar no botão abaixo."
        ]
    }
}
var perguntas = [
    {
        titulo: "Responda clicando no símbolo correto - 1/6",
        pergunta: "Em eventos culturais, este símbolo deve indicar a existência, no local, de equipamentos e serviços de inclusão para as pessoas de todos os níveis, em todos os lugares.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: '<img src="img/ad.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "b",
                validacao: false,
                texto: '<img src="img/cadeirante.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "c",
                validacao: false,
                texto: '<img src="img/deficiente-auditivo.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "d",
                validacao: false,
                texto: '<img src="img/deficiente-visual.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "e",
                validacao: false,
                texto: '<img src="img/libras.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "f",
                validacao: true,
                texto: '<img src="img/acessibilidade-onu.png" class="img-fluid respostas-ico">'
            },
        ],
        feedbacks: {
            
            positivo: "Parabéns, você relacionou corretamente o significado ao seu símbolo de acessibilidade!", 
            negativo: "Não foi desta vez que você relacionou corretamente o significado ao seu símbolo de acessibilidade."
            
        }
    },
    {
        titulo: "Responda clicando no símbolo correto - 2/6",
        pergunta: "Em eventos culturais, este símbolo deve indicar a existência do intérprete de Libras.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: '<img src="img/ad.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "b",
                validacao: false,
                texto: '<img src="img/cadeirante.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "c",
                validacao: false,
                texto: '<img src="img/deficiente-auditivo.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "d",
                validacao: false,
                texto: '<img src="img/deficiente-visual.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "e",
                validacao: true,
                texto: '<img src="img/libras.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "f",
                validacao: false,
                texto: '<img src="img/acessibilidade-onu.png" class="img-fluid respostas-ico">'
            },
        ],
        feedbacks: {
            
            positivo: "Parabéns, você relacionou corretamente o significado ao seu símbolo de acessibilidade!", 
            negativo: "Não foi desta vez que você relacionou corretamente o significado ao seu símbolo de acessibilidade."
            
        }
    },
    {
        titulo: "Responda clicando no símbolo correto - 3/6",
        pergunta: "Em eventos culturais, este símbolo é utilizado para indicar a acessibilidade em programas de televisão, exibições de vídeos e projeções de filmes.",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: '<img src="img/ad.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "b",
                validacao: false,
                texto: '<img src="img/cadeirante.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "c",
                validacao: false,
                texto: '<img src="img/deficiente-auditivo.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "d",
                validacao: false,
                texto: '<img src="img/deficiente-visual.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "e",
                validacao: false,
                texto: '<img src="img/libras.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "f",
                validacao: false,
                texto: '<img src="img/acessibilidade-onu.png" class="img-fluid respostas-ico">'
            },
        ],
        feedbacks: {
            
            positivo: "Parabéns, você relacionou corretamente o significado ao seu símbolo de acessibilidade!", 
            negativo: "Não foi desta vez que você relacionou corretamente o significado ao seu símbolo de acessibilidade."
            
        }
    },
    {
        titulo: "Responda clicando no símbolo correto - 4/6",
        pergunta: "Em eventos culturais, este símbolo deve indicar a existência de suporte para pessoas surdas ou com perda auditiva.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: '<img src="img/ad.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "b",
                validacao: false,
                texto: '<img src="img/cadeirante.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "c",
                validacao: true,
                texto: '<img src="img/deficiente-auditivo.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "d",
                validacao: false,
                texto: '<img src="img/deficiente-visual.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "e",
                validacao: false,
                texto: '<img src="img/libras.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "f",
                validacao: false,
                texto: '<img src="img/acessibilidade-onu.png" class="img-fluid respostas-ico">'
            },
        ],
        feedbacks: {
            
            positivo: "Parabéns, você relacionou corretamente o significado ao seu símbolo de acessibilidade!", 
            negativo: "Não foi desta vez que você relacionou corretamente o significado ao seu símbolo de acessibilidade."
            
        }
    },
    {
        titulo: "Responda clicando no símbolo correto - 5/6",
        pergunta: "Em eventos culturais, este símbolo deve indicar a existência de espaços adequados para acomodar e receber pessoas portadoras de deficiência física.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: '<img src="img/ad.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "b",
                validacao: true,
                texto: '<img src="img/cadeirante.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "c",
                validacao: false,
                texto: '<img src="img/deficiente-auditivo.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "d",
                validacao: false,
                texto: '<img src="img/deficiente-visual.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "e",
                validacao: false,
                texto: '<img src="img/libras.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "f",
                validacao: false,
                texto: '<img src="img/acessibilidade-onu.png" class="img-fluid respostas-ico">'
            },
        ],
        feedbacks: {
            
            positivo: "Parabéns, você relacionou corretamente o significado ao seu símbolo de acessibilidade!", 
            negativo: "Não foi desta vez que você relacionou corretamente o significado ao seu símbolo de acessibilidade."
            
        }
    },
    {
        titulo: "Responda clicando no símbolo correto - 6/6",
        pergunta: "Em eventos culturais, este símbolo deve indicar a existência de recursos tecnológicos para a inclusão de pessoas com deficiências visuais.",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: '<img src="img/ad.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "b",
                validacao: false,
                texto: '<img src="img/cadeirante.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "c",
                validacao: false,
                texto: '<img src="img/deficiente-auditivo.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "d",
                validacao: true,
                texto: '<img src="img/deficiente-visual.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "e",
                validacao: false,
                texto: '<img src="img/libras.png" class="img-fluid respostas-ico">'
            },
            {
                botao: "f",
                validacao: false,
                texto: '<img src="img/acessibilidade-onu.png" class="img-fluid respostas-ico">'
            },
        ],
        feedbacks: {
            
            positivo: "Parabéns, você relacionou corretamente o significado ao seu símbolo de acessibilidade!", 
            negativo: "Não foi desta vez que você relacionou corretamente o significado ao seu símbolo de acessibilidade."
            
        }
    },
   
  
]