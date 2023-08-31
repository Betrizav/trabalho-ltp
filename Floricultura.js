class Floricultura {
    constructor(descricao, cor, tipoFlor, data, preco){
        this.descricao = descricao,
        this.cor = cor,
        this.tipoFlor = tipoFlor,
        this.data = data,
        this.preco = preco
    }
    static gerarId(){
        return Math.floor(Math.random()*30);
    }
}