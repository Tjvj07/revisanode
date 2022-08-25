const transacoes={
    transacoes:[
{
  valor:10,
  descricao:"pastel",
  categoria:"Despesa"
},
{
  valor:3,
  descricao:"doce",
  categoria:"Receita" 
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