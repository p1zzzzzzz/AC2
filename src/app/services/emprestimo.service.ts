import { Injectable } from '@angular/core';
import { Emprestimo } from '../models/emprestimo';

@Injectable({ providedIn: 'root' })
export class EmprestimoService {
  emprestimos: Emprestimo[] = [];
  proximoId = 1;

  listar() {
    return this.emprestimos;
  }

  adicionar(nomePessoa: string, tituloLivro: string, data: string) {
    const novo: Emprestimo = {
      id: this.proximoId,
      nomePessoa: nomePessoa,
      tituloLivro: tituloLivro,
      dataPrevistaDevolucao: data,
      devolvido: false
    };

    this.emprestimos.push(novo);
    this.proximoId++;
  }

  remover(id: number) {
    this.emprestimos = this.emprestimos.filter(item => item.id !== id);
  }

  registrarDevolucao(id: number) {
    const emprestimo = this.emprestimos.find(item => item.id === id);
    if (emprestimo) {
      emprestimo.devolvido = true;
    }
  }
}
