function addJogador(){
    var nomeJogador = document.getElementById('novoJogador')
    var novoJogador = nomeJogador.value
    var objeto = {
        nome: novoJogador,
        vitorias: 0, 
        empates: 0,
        derrotas: 0,
        pontos: 0
    }
    jogadores.push(objeto)
    exibirJogadores(jogadores)
    nomeJogador.value = ""

}

var jogadores = []
exibirJogadores(jogadores)

function exibirJogadores(jogadores){
    var html = ""
    for(var i=0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onclick='addVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td rowlspan='2'><button onclick='addEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onclick='addDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function calculaPontos(jogador){
    var pontos = ((jogador.vitorias * 3) + (jogador.empates * 1) - (jogador.derrotas * 2))
    return pontos
}

function addVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
}

function addEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
}

function addDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
}

function reiniciar(){
    jogadores = []
    exibirJogadores(jogadores)

}