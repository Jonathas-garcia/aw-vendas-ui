import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private api = 'https://app-vendas-api.herokuapp.com';

  constructor(private http: HttpClient) {
   }
//CRIA O OBJETO LISTAR QUE ACESSA A API E RETORNA AS VENDAS
   listar():Observable<any>{
     return this.http.get<any>(`${this.api}/vendas`);
   }

listarClientes():Observable<any>{
  return this.http.get<any>(`${this.api}/clientes`);
}

listarProdutos():Observable<any>{
  return this.http.get<any>(`${this.api}/produtos`);
}

adicionarVenda(venda: any):Observable<any>{
  return this.http.post<any>(`${this.api}/vendas`, venda);
}

}
