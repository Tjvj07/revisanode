const transacoes={
    transacoes:[
{
  valor:10,
  descricao:"pastel"
},
{
  valor:3,
  descricao:"doce"
}
]
}
class TransacoesRepositorio{ 


    listarTransacoes(){
    return transacoes
}
    
    
    criarTransacoes(transacao){
        const lista = transacoes.transacoes
        lista.push(transacao)
    }
}

module.exports = TransacoesRepositorio