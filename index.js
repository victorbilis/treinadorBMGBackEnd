const express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/metas', (req, res) => {
    var metas = [
        {
            'id': 1,
            'meta': 'Viajar'
        },{
            'id': 2,
            'meta': 'Propriedade'
        },{
            'id': 3,
            'meta': 'Veículo'
        },{
            'id': 4,
            'meta': 'Renda extra'
        },{
            'id': 5,
            'meta': 'Veículo'
        },{
            'id': 6,
            'meta': 'Organizar minhas finanças'
        },{
            'id': 7,
            'meta': 'Escola e Faculdade'
        },{
            'id': 8,
            'meta': 'Pagar minhas dívidas'
        },{
            'id': 9,
            'meta': 'Outros'
        },
    ];

    res.json(metas);
});


app.get('/trilhas', (req, res) => {
    var trilhas = [
        {
            'modo' : 'Conservador',
            'objetivos': [{
                'id': 1,
                'titulo':'Missão 1',
                'descricao':'Poupe R$ 100,00',
                'explicativo': 'Utilize o serviço POUPE PRA MIM para conseguir ter R$ 100,00 no seu cofrinho digital. Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Utilizar',
                'comentarioDuda': 'Bem vindo à sua primeira missão! O serviço POUPE PRA MIM da BMG fará com que você consiga poupar seu dinheiro para iniciar seus investimentos. \n Vamos INVESTIR!',
                'link': 'https://www.bancobmg.com.br/site/conta-digital/poupa-pra-mim/'
            },{
                'id': 2,
                'titulo':'Missão 2',
                'descricao':'Invista SUPER POUP',
                'explicativo': 'Utilize o serviço SUPER POUP para ter um rendimento mensal podendo resgatar a qualquer momento. Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Investir',
                'comentarioDuda': 'Parabéns! Você está indo super bem! Vamos utilizar o R$ 100,00 da Missão 1 para fazer eles renderem!',
                'link': 'https://www.superpoup.com.br/'
            },{
                'id': 3,
                'titulo':'Missão 3',
                'descricao':'Volte R$ 100,00',
                'explicativo': 'Utilize o serviço VOLTE PRA MIM onde você receberá uma parte do seu dinheiro de volta. Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Utilizar',
                'comentarioDuda': 'Para conseguir completar esta missão use nosso cartão de débito e crédito! Caso de dúvidas acesse nossa comunidade na opção Home.',
                'link': 'https://www.meubmg.com.br/volta-pra-mim/'
            },{
                'id': 4,
                'titulo':'Missão 4',
                'descricao':'Invista R$ 100,00 no BMG PRÉ 1 ano',
                'explicativo': 'O investimento BMG PRÉ te dará uma rentabilidade maior que os primeiros serviços que utilizamos! Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Investir',
                'comentarioDuda': 'Sua economias já estão rendendo! Com o prazo de 1 ano sua rentabilidade será mais eficaz! Invista e continue usando os serviços POUPE PRA MIM e VOLTA PRA MIM.',
                'link': 'https://www.bmginvestdigital.com.br/Home/investimentos'
            },{
                'id': 5,
                'titulo':'Missão 5',
                'descricao':'Poupe ou volte R$ 200,00',
                'explicativo': 'Utilize o serviço POUPE PRA MIM ou VOLTA PRA MIM para conseguir ter R$ 200,00 no seu cofrinho digital. Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Utilizar',
                'comentarioDuda': 'Já conseguimos investir nosso dinheiro inicial! Agora temos que poupar e economizar mais para que tenhamos mais eficácia na nossa renda!',
                'link': 'https://www.bmginvestdigital.com.br/Home/investimentos'
            }]
        },
        {
            'modo' : 'Moderado',
            'objetivos': [{
                'id': 1,
                'titulo':'Missão 1',
                'descricao':'Poupe R$ 200,00',
                'explicativo': 'Utilize o serviço POUPE PRA MIM para conseguir ter R$ 200,00 no seu cofrinho digital. Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Utilizar',
                'comentarioDuda': 'Bem vindo à sua primeira missão! O serviço POUPE PRA MIM da BMG fará com que você consiga poupar seu dinheiro para iniciar seus investimentos. \n Vamos INVESTIR!',
                'link': 'https://www.bancobmg.com.br/site/conta-digital/poupa-pra-mim/'
            },{
                'id': 2,
                'titulo':'Missão 2',
                'descricao':'Invista SUPER POUP',
                'explicativo': 'Utilize o serviço SUPER POUP para ter um rendimento mensal podendo resgatar a qualquer momento. Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Investir',
                'comentarioDuda': 'Parabéns! Você está indo super bem! Vamos utilizar o R$ 200,00 da Missão 1 para fazer eles renderem!',
                'link': 'https://www.superpoup.com.br/'
            },{
                'id': 3,
                'titulo':'Missão 3',
                'descricao':'Volte R$ 200,00',
                'explicativo': 'Utilize o serviço VOLTE PRA MIM onde você receberá uma parte do seu dinheiro de volta. Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Utilizar',
                'comentarioDuda': 'Para conseguir completar esta missão use nosso cartão de débito e crédito! Caso de dúvidas acesse nossa comunidade na opção Home.',
                'link': 'https://www.meubmg.com.br/volta-pra-mim/'
            },{
                'id': 4,
                'titulo':'Missão 4',
                'descricao':'Invista R$ 200,00 no BMG DI 1 ano',
                'explicativo': 'O investimento BMG DI te dará uma rentabilidade maior que os primeiros serviços que utilizamos! Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Investir',
                'comentarioDuda': 'Sua economias já estão rendendo! Com o prazo de 1 ano sua rentabilidade será mais eficaz! Invista e continue usando os serviços POUPE PRA MIM e VOLTA PRA MIM.',
                'link': 'https://www.bmginvestdigital.com.br/Home/investimentos'
            },{
                'id': 5,
                'titulo':'Missão 5',
                'descricao':'Poupe ou volte R$ 300,00',
                'explicativo': 'Utilize o serviço POUPE PRA MIM ou VOLTA PRA MIM para conseguir ter R$ 300,00 no seu cofrinho digital. Caso queira entrar em detalhes, acesse o link abaixo.',
                'temLink' : 1,
                'textoBotao': 'Utilizar',
                'comentarioDuda': 'Já conseguimos investir nosso dinheiro inicial! Agora temos que poupar e economizar mais para que tenhamos mais eficácia na nossa renda!',
                'link': 'https://www.bmginvestdigital.com.br/Home/investimentos'
            }]
        }
    ];

    res.json(trilhas);
});

app.listen(3000, () => {
    console.log('Listening on 3000');
})