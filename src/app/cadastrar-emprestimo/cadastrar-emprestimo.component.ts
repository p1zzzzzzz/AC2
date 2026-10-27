import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-emprestimo.component.html',
  styleUrl: './cadastrar-emprestimo.component.css'
})
export class CadastrarEmprestimoComponent {
  nomePessoa = '';
  tituloLivro = '';
  dataPrevista = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cadastrar() {
    if (this.nomePessoa && this.tituloLivro && this.dataPrevista) {
      this.emprestimoService.adicionar(
        this.nomePessoa,
        this.tituloLivro,
        this.dataPrevista
      );

      this.nomePessoa = '';
      this.tituloLivro = '';
      this.dataPrevista = '';
      alert('Empréstimo cadastrado!');
    }
  }
}
