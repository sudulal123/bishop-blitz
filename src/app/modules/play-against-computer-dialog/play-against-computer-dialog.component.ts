import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from 'src/app/chess-logic/models';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StockfishService } from '../computer-mode/stockfish.service';

@Component({
  selector: 'app-play-against-computer-dialog',
  templateUrl: './play-against-computer-dialog.component.html',
  styleUrls: ['./play-against-computer-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
})
export class PlayAgainstComputerDialogComponent {
  public stockfishLevels: readonly number[] = [1, 2, 3, 4, 5];
  public stockfishLevel: number = 1;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private stockfishService: StockfishService
  ) {}

  public selectStockfishLevel(level: number): void {
    this.stockfishLevel = level;
  }

  public play(color: 'w' | 'b'): void {
    this.dialog.closeAll();
    this.stockfishService.computerConfiguration$.next({
      color: color === 'w' ? Color.Black : Color.White,
      level: this.stockfishLevel,
    });
    this.router.navigate(['against-computer']);
  }

  public closeDialog(): void {
    this.router.navigate(['against-friend']);
  }
}
