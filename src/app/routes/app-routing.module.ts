import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessBoardComponent } from '../modules/chess-board/chess-board.component';
import { ComputerModeComponent } from '../modules/computer-mode/computer-mode.component';

const routes: Routes = [
  {
    path: 'against-friend',
    component: ChessBoardComponent,
    title: 'BishopBlitz | vs Friend',
  },
  {
    path: 'against-computer',
    component: ComputerModeComponent,
    title: 'BishopBlitz | vs Computer',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
