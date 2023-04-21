export class FornecedorResponse {
    public id: number;
    public descricao: string;
    public cnpj: string;
  
    constructor(params: Partial<FornecedorResponse>) {
      this.id = params.id || 0;
      this.descricao = params.descricao || '';
      this.cnpj = params.cnpj || '';
    }
  }
  