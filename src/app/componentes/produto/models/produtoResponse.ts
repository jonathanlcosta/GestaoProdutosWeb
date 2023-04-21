import { FornecedorResponse } from "../../fornecedor/models/fornecedorResponse";

export class ProdutoResponse {

    public codigo: number;
    public descricao: string;
    public dataValidade : Date;
    public dataFabricacao: Date;
    public fornecedor: FornecedorResponse;
  
  
    constructor(params: Partial<ProdutoResponse>) {
      this.codigo = params.codigo || 0;
      this.descricao = params.descricao || '';
      this.dataFabricacao = params.dataValidade;
      this.dataValidade = params.dataValidade;
      this.fornecedor = params.fornecedor || new FornecedorResponse({});
    }
  }