const Nome = prompt("Qual o seu nome ?");

const Mensagens = [

];

axios.defaults.headers.common['Authorization'] = 'xLBzuiWi6qYVmyUXY7S8o3l7';

function aparecerMensagens(){
    const ulmensagens = document.querySelector('.Mensagens');
    ulmensagens.innerHTML = '';

    for(let i = 0; i<Mensagens.length; i++){
        let menssagem = Mensagens[i];
        ulmensagens.innerHTML += `            
        <li>
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

    aparecerMensagens();

}