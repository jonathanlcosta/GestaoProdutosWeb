import { HttpParams } from '@angular/common/http';
export class FornecedorRequest{
    Descricao: string;
    Cnpj: string;

    constructor(params: Partial<FornecedorRequest>){
        this.Descricao = params.Descricao || "",
        this.Cnpj = params.Cnpj || ""
    }
}