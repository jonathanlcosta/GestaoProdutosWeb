export class PaginacaoRequest {
   Pg: number;
   Qt: number;

    constructor(params: Partial<PaginacaoRequest>) {
       this.Pg = params.Pg ??  null;
       this.Qt = params.Qt ?? null;

    }
}

