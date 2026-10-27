import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
  selector: 'app-lista-emprestimos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-emprestimos.component.html',
  styleUrl: './lista-emprestimos.component.css'
})
export class ListaEmprestimosComponent {
  constructor(public emprestimoService: EmprestimoService) {}

  registrarDevolucao(id: number) {
    this.emprestimoService.registrarDevolucao(id);
  }

  remover(id: number) {
    this.emprestimoService.remover(id);
  }

  quantidadeAbertos() {
    return this.emprestimoService.listar().filter(item => !item.devolvido).length;
  }

  quantidadeDevolvidos() {
    return this.emprestimoService.listar().filter(item => item.devolvido).length;
  }
}
