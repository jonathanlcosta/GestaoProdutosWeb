import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Component } from '@angular/core';
import { ProdutoResponse } from '../produtoResponse';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent {
  produto: ProdutoResponse = {
    
    codigo :0,
    descricao: '',
    dataFabricacao: new Date(),
    dataValidade: new Date(),
    fornecedor: null,

  }

  constructor(private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    }

    ngOnInit(): void {
      const codigo = this.route.snapshot.paramMap.get('codigo')
      console.log(codigo)
      this.service.buscarProdutoPorId(parseInt(codigo!))
      .subscribe({ next:
        produto => {
          this.produto = produto;
          console.log(produto);
        },
        error: e => console.log(e)
  });
  
    }

    
    excluirProduto() {
      if(this.produto.codigo) {
        this.service.excluirProduto(this.produto.codigo).subscribe(() => {
          this.router.navigate(['/listarProduto'])
        })
      }
    }
  
    cancelar() {
      this.router.navigate(['/listarProduto'])
    }
}
