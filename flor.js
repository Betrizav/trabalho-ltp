class Flor extends Floricultura{
    constructor(descricao, cor, tipoFlor, data, preco){
        super(descricao, cor, tipoFlor, data, preco);
        this.id = Floricultura.gerarId();
    }
}