import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'lib-snack-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
})
export class SnackBarComponent {
  private _snackBar = inject(MatSnackBar);

  @Input() message: string = 'This is a snackbar message';
  @Input() action: string = 'Close';
  @Input() duration: number = 2000;
  @Input() horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  @Input() verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Input() snackbarLabel: string = 'Open snackbar';
  @Input() disabled: boolean = false;

  openSnackBar() {
    this._snackBar.open(this.message, this.action, {
      duration: this.duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
