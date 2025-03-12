window.onload = function() {
    const imagensFase1 = [
        { url: "https://media.gettyimages.com/id/176621296/pt/vetorial/pavilh%C3%A3o-de-espanha.jpg?s=612x612&w=0&k=20&c=TilmAIfYqUxbP6j48Rv4sZXQbeHEMu3MUQp00UmX5h8=", resposta: "Espanha" },
        { url: "https://media.gettyimages.com/id/483663073/pt/vetorial/pavilh%C3%A3o-de-portugal.jpg?s=612x612&w=0&k=20&c=UlGRQOJA7_WsP7ydiBGQVmgNfEtr-ljTEf4OjJ1QiPo=", resposta: "Portugal" },
        { url: "https://media.gettyimages.com/id/1398457995/pt/vetorial/flag-of-argentina-background.jpg?s=612x612&w=0&k=20&c=finkNRQMCyR1RH6MFHeS6zvfbrWd6qf7NmICXp4Rxbo=", resposta: "Argentina" },
        { url: "https://media.gettyimages.com/id/176430982/pt/vetorial/a-bandeira-do-brasil.jpg?s=612x612&w=0&k=20&c=2JlhbvoeF_6XiwtIIHjrnecJTpqnpwfvzUAn7NmMZqA=", resposta: "Brasil" },
        { url: "https://media.gettyimages.com/id/905409566/pt/vetorial/american-flag.jpg?s=612x612&w=0&k=20&c=hJElA1ncZCeuMyjonHKCB5TtdYE3PCQ_FmiuCHvr8Qk=", resposta: "Estados Unidos" },
        { url: "https://media.gettyimages.com/id/472330663/pt/vetorial/bandeira-de-inglaterra.jpg?s=612x612&w=0&k=20&c=QcQ68TpbcOYGzIr4GHAZP-hw32y3d-VepraZTDHO6E4=", resposta: "Inglaterra" },
        { url: "https://media.gettyimages.com/id/537287305/pt/vetorial/bandeira-do-m%C3%A9xico.jpg?s=612x612&w=0&k=20&c=O-FXZz40gTnestNO0bXA_Ei1dXj6giImzrAr4BBOoJA=", resposta: "México" },
        { url: "https://media.gettyimages.com/id/537287287/pt/vetorial/bandeira-do-jap%C3%A3o.jpg?s=612x612&w=0&k=20&c=zwDcRnTOm7_WxQmCtgKbl0VkH2BObdIeBzrIFEf3bDk=", resposta: "Japão" },
        { url: "https://media.gettyimages.com/id/1129851120/pt/foto/croatia-flag.jpg?s=612x612&w=0&k=20&c=JZ3XM_bQQFjQ2g7mdFwGLxkSERbJBhRQRMo2GgKABYE=", resposta: "Croácia" },
        { url: "https://media.gettyimages.com/id/166012239/pt/vetorial/bandeira-da-alemanha.jpg?s=612x612&w=0&k=20&c=6kjExUtW1WlCaAKz1-DuVGAMwGBsGIP3DsaxyMNcD_4=", resposta: "Alemanha" }
    ];

    const imagemFase2 = [
        { url :"https://media.gettyimages.com/id/537287209/pt/vetorial/bandeira-do-egipto.jpg?s=612x612&w=0&k=20&c=rhdc7qXLQ_Kl3d85aIWItp-AZ4dnUO8g2jCd4vizXWk=", resposta: "Egito"},
        { url :"https://media.gettyimages.com/id/123201753/pt/foto/bandeira-da-%C3%A1frica-do-sul.jpg?s=612x612&w=0&k=20&c=OXz9GfdZWHrGGH6EPhGmUaeXlGDW1ktj8SLMZmU_hy0=", resposta:"Africa do sul"},
        { url :"https://media.gettyimages.com/id/657672656/pt/vetorial/flag-of-iran.jpg?s=612x612&w=0&k=20&c=2RVvsrETSQlvqYa9_7aJwVmx_r2uEKS1x4WiCUxGdz0=", resposta:"Irã"},
        { url :"https://media.gettyimages.com/id/472330819/pt/vetorial/bandeira-da-r%C3%BAssia.jpg?s=612x612&w=0&k=20&c=_2jHZyUrbqNE10eVTTLT1BT49Rb9631ZTWgEUiwiqOA=", resposta:"Rússia"},
        { url :"https://media.gettyimages.com/id/657672856/pt/vetorial/flag-of-poland.jpg?s=612x612&w=0&k=20&c=y2Ev2heovmOpznMEws9RK2wJHpgjA2pkKxg4srXBVEs=", resposta:"Polônia"},
        { url :"https://media.gettyimages.com/id/657672854/pt/vetorial/flag-of-qatar.jpg?s=612x612&w=0&k=20&c=SJJQENH0d-KLeYcT7UQThGz9X6G8yR0n0XS7D_PxKHk=", resposta:"Qatar"},
        { url :"https://media.gettyimages.com/id/509613950/pt/vetorial/bandeira-do-equador.jpg?s=612x612&w=0&k=20&c=npAasdwUHl7LLA6tw64lY0qw6hNccT7BfWS5PI8_OXA=", resposta:"Equador"},
        { url :"https://media.gettyimages.com/id/1129857393/pt/foto/paraguay-flag.jpg?s=612x612&w=0&k=20&c=iRZUNM1uV8VbqN2LPii4aQC-NiAzrSUq0-5mjIF7wy4=", resposta:"Paraguai"},
        { url :"https://media.gettyimages.com/id/1129861954/pt/foto/venezuela-flag.jpg?s=612x612&w=0&k=20&c=gNRW_9J44Sa9gLC-3tq1Z7ucH2ZCj3SjdLEsKIAaqnU=", resposta:"Venezuela"},
        { url :"https://media.gettyimages.com/id/175584631/pt/vetorial/bandeira-do-chile.jpg?s=612x612&w=0&k=20&c=uP3FVpyFxEdyL2DsbLGzAEfhkIqiAsnAKCAOys5xMiA=", resposta:"Chile"}
    ];

    const imagemFase3 = [
        { url :"https://media.gettyimages.com/id/2156780234/pt/foto/flag-of-denmark.jpg?s=612x612&w=0&k=20&c=fXTVxdB1kL3-SyhfDXIv_MFQ7xUCrtyzv4miALmydbE=", resposta:"Dinamarca"},
        { url :"https://media.gettyimages.com/id/1728178821/pt/foto/israeli-flag.jpg?s=612x612&w=0&k=20&c=vjMXn1fK_BB-N26LP8fr4yhnJsmMmHvnPRH8wYzazXc=", resposta:"Israel"},
        { url :"https://media.gettyimages.com/id/1454082649/pt/foto/close-up-of-grand-duchy-of-luxembourg-flag.jpg?s=612x612&w=0&k=20&c=fPZk2Xp_QnRiuP_Idn5LreHQp4LinU_VyguqqHTMsMM=", resposta:"Luxemburgo"},
        { url :"https://media.gettyimages.com/id/1129857328/pt/foto/nigeria.jpg?s=612x612&w=0&k=20&c=2AOHhS9mfg0XoTY0YcNseO85o8PuMtQPQvheqlDfY3M=", resposta:"Nigéria"},
        { url :"https://media.gettyimages.com/id/1129857349/pt/foto/pakistan-flag.jpg?s=612x612&w=0&k=20&c=5692DEVCrTL1fhYqPLTvEnXRR-W8bWdoiDdG5OrrxdU=", resposta:"Paquistão"},
        { url :"https://media.gettyimages.com/id/2028102480/pt/foto/flag-of-romania.jpg?s=612x612&w=0&k=20&c=yw0O-UdrGGYXFHc8aEekmKD67hx7JKIs0we8k8VbZgg=", resposta:"Romênia"},
        { url :"https://media.gettyimages.com/id/1129861755/pt/foto/switzerland.jpg?s=612x612&w=0&k=20&c=Zb9eFXXGjpgfKD2QCYn-gvJWlpnPS2MgkXbUtWwemT4=", resposta:"Suiça"},
        { url :"https://media.gettyimages.com/id/1129852505/pt/foto/france-flag.jpg?s=612x612&w=0&k=20&c=9NMJVL2Ny9qunGUohw3YEa43ddGW_NqPINJgpHJG1FI=", resposta:"França"},
        { url :"https://media.gettyimages.com/id/1129857636/pt/foto/united-kingdom.jpg?s=612x612&w=0&k=20&c=Yq7GvoMabFbuqKlKWycG7pbfZ-a1QWw3PRYStLeL284=", resposta:"Reino Unido"},
        { url :"https://media.gettyimages.com/id/2187342969/pt/foto/norwegian-flag.jpg?s=612x612&w=0&k=20&c=YVxG3jeSOjwqi-dypVKkhR9Dq90q207MCVQsVN2nLUA=", resposta:"Noruega"}
    ]
    const imagemFase4 = [
        { url :"https://media.gettyimages.com/id/1129857354/pt/foto/panama-flag.jpg?s=612x612&w=0&k=20&c=0wB9HfImuHKDNszmD2Hq8ApW8WmTE_6XwMWs69sbz1Y=", resposta:"Panamá"},
        { url :"https://media.gettyimages.com/id/1454290882/pt/foto/monaco-national-flag.jpg?s=612x612&w=0&k=20&c=iulR3vqnAeEmpq00bvEJTS9qZSfQtzvNim395UMQ2U0=", resposta:"Mônaco"},
        { url :"https://media.gettyimages.com/id/2153068336/pt/foto/flag-of-madagascar.jpg?s=612x612&w=0&k=20&c=DC6uaKJaxEkVFkznOvSORS3PTDcavpKXAfvq0gc1LdY=", resposta:"Madagascar"},
        { url :"https://media.gettyimages.com/id/1129852652/pt/foto/lebanon-flag.jpg?s=612x612&w=0&k=20&c=sDh9Fd4JpKLO-Mia3OoVQ7L4lGLd4lFKb5dfH-9PZtw=", resposta:"Líbano"},
        { url :"https://media.gettyimages.com/id/1222984286/pt/foto/flag-of-republic-of-ireland.jpg?s=612x612&w=0&k=20&c=4LcHoaWtOGRBfKsFmqX6m9CLQzsaUOphcS6tPRu28tM=", resposta:"Irlanda"},
        { url :"https://media.gettyimages.com/id/186883097/pt/foto/indon%C3%A9sia-m%C3%B3naco-bandeira-de-hesse.jpg?s=612x612&w=0&k=20&c=o_Xl54KharKhqhBaDOY1w5Yd2YhGO5woOVL8LllLkGk=", resposta:"Indonésia"},
        { url :"https://media.gettyimages.com/id/1129852560/pt/foto/india-flag.jpg?s=612x612&w=0&k=20&c=2p6YKpU9KaWy_h9syVUcZm7VWFVwY3-4z4PWEWZRXh0=", resposta:"Índia"},
        { url :"https://media.gettyimages.com/id/2017883755/pt/foto/greek-flag.jpg?s=612x612&w=0&k=20&c=yUNy-sCDpm7Q32UGGVPyVIr9wOKm_Zhchoq3Wz8Q-M8=", resposta:"Grécia"},
        { url :"https://media.gettyimages.com/id/2017996729/pt/foto/flag-of-ghana.jpg?s=612x612&w=0&k=20&c=l48E51ohNxa10aA4C-Itzn3p9afSHdsJ1dJdgbkiJig=", resposta:"Gana"},
        { url :"https://media.gettyimages.com/id/2028102500/pt/foto/slovenian-flag.jpg?s=612x612&w=0&k=20&c=e_x4dAzFURAAFycFBJsKk9FFtqzxYZNzLFvutikK6xs=", resposta:"Eslovênia"},
    ]
    const imagemFase5 = [
        { url :"https://media.gettyimages.com/id/2006324508/pt/foto/flag-of-united-arab-emirates.jpg?s=612x612&w=0&k=20&c=Gv3XaEKYPCrONzoE207h0octJkqMBVosI87y7NjFkp4=",resposta:"Emirados Árabes"},
        { url :"https://media.gettyimages.com/id/2148198920/pt/foto/flag-of-kazakhstan.jpg?s=612x612&w=0&k=20&c=ymaK2yZTJ4VhVgtp6zlkq5Pav6cQNVrhLy5qgKwBFf0=",resposta:"Cazaquistão"},
        { url :"https://media.gettyimages.com/id/2112805634/pt/foto/flag-of-bhutan.jpg?s=612x612&w=0&k=20&c=9F3dMuUOfr1qs4A-eDjBQKqIQ0XTDTIAvU14eXm-Bn0=",resposta:"Butão"},
        { url :"https://media.gettyimages.com/id/2150578015/pt/foto/flag-of-ivory-coast.jpg?s=612x612&w=0&k=20&c=Q6-fQjUIyxkNId1pNLydGWYN-FAKE0TPVvNZZJKdBEE=",resposta:"Costa do Marfim"},
        { url :"https://media.gettyimages.com/id/1129851123/pt/foto/cuba-flag.jpg?s=612x612&w=0&k=20&c=5D-Q1_o3sTttl8PJpOcOQRDc5F_rBRMNkUM4CZOtLOk=",resposta:"Cuba"},
        { url :"https://media.gettyimages.com/id/1400074226/pt/vetorial/flag-of-estonia.jpg?s=612x612&w=0&k=20&c=1W6_GkT8ZF7lSJWxTh-a5vR1T7OmKO9KjxN2-jKxh0M=",resposta:"Estônia"},
        { url :"https://media.gettyimages.com/id/1129857330/pt/foto/north-macedonia-flag.jpg?s=612x612&w=0&k=20&c=SD8YLvE6Sghzhyur7RQjxN7lr7WLepMkW9rAXIWMUtA=",resposta:"Macedônia"},
        { url :"https://media.gettyimages.com/id/2184560894/pt/foto/vietnam-flag.jpg?s=612x612&w=0&k=20&c=WLu0bHLgnRWd4krp_d9JVo7NK-4EJjT_JE1-rK8A0EA=",resposta:"Vietnam"},
        { url :"https://media.gettyimages.com/id/1372951960/pt/foto/ukrainian-flag-design.jpg?s=612x612&w=0&k=20&c=-p7PT4ens4s14QUSJfvNHEpJAeBoknWTg87cZc3AYrs=",resposta:"Ucrânia"},
        { url :"https://st2.depositphotos.com/1797936/8312/v/450/depositphotos_83128954-stock-illustration-flat-design-flag-illustration-with.jpg",resposta:"República Dominicana"},
    ]
     
    let faseatual =1;
    let imagens = imagensFase1;
    let indiceImagem = 0;
    let temporestante = 60;
    let intervaloTempo;
    let jogoIniciado = false;
    let tentativas = 3;
    let tempoacabo = false;

    const botaoComeçar = document.getElementById("começar-jogo");
    const botaoreiniciar = document.getElementById("reiniciar-imagem");
    const imagem = document.getElementById("minhaImagem");
    const cronometro = document.getElementById("cronometro"); 
    const tentativasTexto = document.getElementById("tentativas");
    const mensagemTexto = document.getElementById("mensagem"); 
    const botaoAvancarFase = document.getElementById("avancarFase");
    const botaoComojogar = document.getElementById("como-jogar");

    const botoes = document.querySelectorAll(".opcao-resposta"); 
botoes.forEach(botao => botao.disabled = true);

     function comojogar(){
        alert("Como Jogar Para começar o jogo, clique no botão `Começar` Jogo. O cronômetro iniciará a contagem regressiva e a primeira bandeira será exibida na tela.Seu objetivo é identificar corretamente o país ao qual a bandeira pertence, escolhendo uma das quatro alternativas disponíveis. Se você selecionar a resposta correta, uma nova bandeira aparecerá. Caso erre, perderá uma tentativa. Você tem um total de 3 tentativas.Para avançar de fase, é necessário acertar todas as bandeiras antes que o tempo acabe. Quando completar uma fase, o botão `Avançar Fase` ficará disponível. Clique nele para continuar jogando.Se suas tentativas acabarem ou o tempo chegar a zero, o jogo será encerrado. Para tentar novamente, clique em `Reinicia`.Boa sorte e divirta-se!")
     }


    function atualizarCronometro() {
        cronometro.textContent = `${temporestante}s`;
    }

    function iniciarCronometro() {
    if (intervaloTempo) clearInterval(intervaloTempo);



        tempoacabo = false
        if (jogoIniciado) return;
        jogoIniciado = true;
        

        const botoes = document.querySelectorAll(".opcao-resposta"); 
        botoes.forEach(botao => botao.disabled = false);

        temporestante = 60;
        atualizarCronometro();

        intervaloTempo = setInterval(() => {
            temporestante--;
            atualizarCronometro();

            if (temporestante <= 0) {
                clearInterval(intervaloTempo);
                tempoacabo = true
                mensagemTexto.textContent ="⏰ Tempo esgotado!";
                mensagemTexto.style.color = "red"

                botaoreiniciar.classList.add("piscar");
                botoes.forEach(botao => botao.disabled = true);
            }
        }, 1000);

        carregarImagem(); 
    }

    function carregarImagem() {
        console.log("Carregando imagem. Índice atual:", indiceImagem);
        if (tempoacabo) return;
        if (!jogoIniciado) return;
        if (indiceImagem >= imagens.length) {
            if (faseatual === 1) {
                mensagemTexto.textContent = "🎉 Parabéns! Você terminou a fase 1! Clique para AVANÇAR."
                mensagemTexto.style.color = "blue";
                
                botaoAvancarFase.style.display = "block";
                botaoAvancarFase.disabled = false; 
                botaoAvancarFase.classList.add("piscando");

                clearInterval(intervaloTempo);
           
            }
            if (faseatual === 2) {
                mensagemTexto.textContent = "🎉 Parabéns! Você terminou a fase 2! Clique para AVANÇAR."
                mensagemTexto.style.color = "blue";
                
                botaoAvancarFase.style.display = "block";
                botaoAvancarFase.disabled = false; 
                botaoAvancarFase.classList.add("piscando");

                clearInterval(intervaloTempo);
           
            }
            if (faseatual === 3) {
                mensagemTexto.textContent = "🎉 Parabéns! Você terminou a fase 3! Clique para AVANÇAR."
                mensagemTexto.style.color = "blue";
                
                botaoAvancarFase.style.display = "block";
                botaoAvancarFase.disabled = false; 
                botaoAvancarFase.classList.add("piscando");

                clearInterval(intervaloTempo);
           
            }
            if (faseatual === 4) {
                mensagemTexto.textContent = "🎉 Parabéns! Você terminou a fase 4! Clique para AVANÇAR."
                mensagemTexto.style.color = "blue";
                
                botaoAvancarFase.style.display = "block";
                botaoAvancarFase.disabled = false; 
                botaoAvancarFase.classList.add("piscando");

                clearInterval(intervaloTempo);
           
            }
            if (faseatual === 5) {
                mensagemTexto.textContent = "🎉 Parabéns! Você completou o jogo"
                mensagemTexto.style.color = "green";
                
                botaoAvancarFase.style.display = "block";
                botaoAvancarFase.disabled = false; 
                botaoreiniciar.classList.add("piscar");

                clearInterval(intervaloTempo);
           
            }
           
            return;
        }
        imagem.src = imagens[indiceImagem].url;
        const respostacorreta = imagens[indiceImagem].resposta;

        let opcoes = imagens
    .filter(img => img.resposta !== respostacorreta)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

        opcoes.push(imagens[indiceImagem]);
        opcoes.sort(() => Math.random() - 0.5);

        const botoes = document.querySelectorAll(".opcao-resposta");
        botoes.forEach((botao, index) => {
            botao.textContent = `${String.fromCharCode(65 + index)}) ${opcoes[index].resposta}`;
            botao.dataset.resposta = opcoes[index].resposta;
            botao.disabled = false;
            botao.onclick = () => verificarResposta(botao);
        });
    }         

    function verificarResposta(botao) {
        if (tempoacabo) return;
        if (botao.dataset.resposta === imagens[indiceImagem].resposta) {
            mensagemTexto.textContent = "✅ Resposta correta! Próxima bandeira";
            mensagemTexto.style.color = "green";

            indiceImagem++; 
            carregarImagem(); 
        } else {
            tentativas--;
            
            tentativasTexto.textContent = `Tentativas restantes: ${tentativas}`;
            mensagemTexto.textContent = `❌ Resposta errada! Você ainda tem ${tentativas} tentativas.`;
            mensagemTexto.style.color = "red";

           
            if (tentativas === 0) {
            mensagemTexto.textContent = "❌ Sem tentativas restantes. Jogo finalizado!tente novamente em REINICIAR";
            mensagemTexto.style.color = "red";
           
            botaoreiniciar.classList.add("piscar");

            const botoes = document.querySelectorAll(".opcao-resposta");
            botoes.forEach(botao => botao.disabled = true);


            
                clearInterval(intervaloTempo); 
                
            }
        }

        
    } 
    document.getElementById("reiniciar-imagem").addEventListener("click", function() {
        location.reload(); 
    });
    document.getElementById("reiniciar-imagem").addEventListener("click", function(event) {
        location.reload();       
    });  

    function reiniciarJogo() {

        botaoreiniciar.classList.remove("piscar");

        imagens = imagensFase1;
        faseatual = 1;
        indiceImagem = 0;
        tentativas = 3;
        temporestante = 60;
        mensagemTexto.textContent = "";
        tentativasTexto.textContent = `Tentativas restantes: ${tentativas}`;
        cronometro.textContent = `${temporestante}s`;
        jogoIniciado = false;
        clearInterval(intervaloTempo);

        botoes.forEach(botao => botao.disabled = true);

        carregarImagem();
        imagem.src = imagensFase1[0].url;
    }

    function avancarFase() {
        
        if (faseatual === 1 && indiceImagem >= imagens.length) {
        
            faseatual = 2;
            imagens = imagemFase2;
            indiceImagem = 0;

           reiniciarCronometro();
           atualizarProgressoFase();

            mensagemTexto.textContent = "🎉 Você avançou para a fase 2!";
            mensagemTexto.style.color = "blue";


            carregarImagem();
            botaoAvancarFase.classList.remove("piscando"); 
           
           
        }
        if (faseatual === 2 && indiceImagem >= imagens.length) {
        
            faseatual = 3;
            imagens = imagemFase3;
            indiceImagem = 0;

           reiniciarCronometro();
           atualizarProgressoFase();

            mensagemTexto.textContent = "🎉 Você avançou para a fase 3!";
            mensagemTexto.style.color = "blue";

            carregarImagem();
            botaoAvancarFase.classList.remove("piscando");
            
        }
        if (faseatual === 3 && indiceImagem >= imagens.length) {
        
            faseatual = 4;
            imagens = imagemFase4;
            indiceImagem = 0;

           reiniciarCronometro();
           atualizarProgressoFase();

            mensagemTexto.textContent = "🎉 Você avançou para a fase 4!";
            mensagemTexto.style.color = "blue";

            carregarImagem();
            botaoAvancarFase.classList.remove("piscando");
            
        }
        if (faseatual === 4 && indiceImagem >= imagens.length) {
        
            faseatual = 5;
            imagens = imagemFase5;
            indiceImagem = 0;

           reiniciarCronometro();
           atualizarProgressoFase();

            mensagemTexto.textContent = "🎉 Você avançou para a fase 5!";
            mensagemTexto.style.color = "blue";

            carregarImagem();
            botaoAvancarFase.classList.remove("piscando");

            document.getElementById("avancarFase").addEventListener("click", avancarFase);
             }
             if (faseatual === 5 && indiceImagem >= imagens.length) {
                mensagemTexto.textContent = "🎉 Parabéns! Você completou o jogo!";
                mensagemTexto.style.color = "green";
                botaoreiniciar.classList.add("piscar");
                botaoAvancarFase.disabled = true; 
            }
        
           
            if (indiceImagem >= imagens.length && faseatual < 5) {
                botaoAvancarFase.classList.add("piscando");
            }
             if (indiceImagem >= imagem.length) {
                botaoAvancarFase.classList.add("piscando");
             }
            
    }



    function reiniciarCronometro() {
       
        if (intervaloTempo) {
            clearInterval(intervaloTempo);
        }
    
        
        temporestante = 60;  
        atualizarCronometro(); 
    
        
        intervaloTempo = setInterval(() => {
            temporestante--;
            atualizarCronometro();  
    
            
            if (temporestante <= 0) {
                clearInterval(intervaloTempo);
                tempoacabo = true;
                mensagemTexto.textContent = "⏰ Tempo esgotado!";
                mensagemTexto.style.color = "red";
                const botoes = document.querySelectorAll(".opcao-resposta");
                botoes.forEach(botao => botao.disabled = true);
            }
        }, 1000);
    }
    function atualizarProgressoFase() {
        document.getElementById("fase-atual").textContent = faseatual; 
    }

    

    botaoComeçar.addEventListener("click", iniciarCronometro); 
    botaoreiniciar.addEventListener("click", reiniciarJogo);
    botaoAvancarFase.addEventListener("click", avancarFase); 
    botaoComojogar.addEventListener("click", comojogar);
 
};