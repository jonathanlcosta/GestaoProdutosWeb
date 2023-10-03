export class ProdutoRequest{
    public Descricao: string;
    public DataValidade : Date;
    public DataFabricacao: Date;
    public IdFornecedor: number;
  
  
    constructor(params: Partial<ProdutoRequest>) {
      this.Descricao = params.Descricao || '';
      this.DataFabricacao = params.DataFabricacao || new Date();
      this.DataValidade = params.DataValidade || new Date()
      this.IdFornecedor = params.IdFornecedor || 0;
}}