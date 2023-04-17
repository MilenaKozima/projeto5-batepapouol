const Nome = prompt("Qual o seu nome ?");

const Mensagens = [

];

axios.defaults.headers.common['Authorization'] = 'xLBzuiWi6qYVmyUXY7S8o3l7';

function verificarservidor(){
const verificarnome = axios.post('https://mock-api.driven.com.br/api/vm/uol/participants',Nome);
verificarnome.catch(error =>{
    if(error.response.status===400){
        console.log('Usuario já existe na sala, escolha outro nome.');
        Nome = prompt("Qual o seu nome ?");
        verificarservidor();
    } else{
        console.log('Erro ao entrar na sala');
    }
})
}

verificarservidor();

function mandarstatus(){
    const ficaronline = axios.post('https://mock-api.driven.com.br/api/vm/uol/status',Nome);
}

 setInterval(mandarstatus,5000);


function aparecerMensagens(){
    const ulmensagens = document.querySelector('.Mensagens');
    ulmensagens.innerHTML = '';

    for(let i = 0; i<Mensagens.length; i++){
        let menssagem = Mensagens[i];
        ulmensagens.innerHTML += `            
        <li data-test="message">
            <div class="aparecer">
                <p>${menssagem.from} para ${menssagem.to}: ${menssagem.text}</p> 
            </div>
        </li>`
        ;
    }
}

//aparecerMensagens();

function adicionarMensagem(){
    const inputMensagem = document.querySelector('input');
    
    const novaMensagem = {
        from: Nome,
        to: "Todos",
        text: inputMensagem.value,
        type: "message" // ou "private_message" para o bônus
    };
    
    Mensagens.push(novaMensagem);
    console.log(novaMensagem);

    const promessa = axios.post('https://mock-api.driven.com.br/api/vm/uol/messages',novaMensagem);
    promessa.then( receberResposta ); // agendando a execucao da funcao quando a resposta chegar no meu computador  
    promessa.catch( deuErro ); // executa uma função se ocorrer algum erro, falha, etc! 
    console.log('mensagem foi enviada ao servidor');

    aparecerMensagens();

}

function receberResposta(resposta){
    // 3 - processar a resposta    
    console.log(`A mensagem foi salva com sucesso com o id ${resposta.data.id}!!!!! :D`);
    console.log(resposta);
}

function deuErro(erro){
    console.log(`ocorreu algum problema ao tentar salvar a mensagem, tente mais tarde!`);
    console.log(erro);
}