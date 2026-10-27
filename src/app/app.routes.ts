import { Routes } from '@angular/router';
import { ListaEmprestimosComponent } from './lista-emprestimos/lista-emprestimos.component';
import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo/cadastrar-emprestimo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaEmprestimosComponent },
  { path: 'cadastro', component: CadastrarEmprestimoComponent }
];
