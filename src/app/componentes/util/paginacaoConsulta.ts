export class PaginacaoResponse<T> {
  Total: number;
  Registros: Array<T>;

  constructor(params: Partial<PaginacaoResponse<T>>) {
      this.Total = params.Total || null;
      this.Registros = params.Registros || null;
      
  }
}
