import { 
  Component,
  Inject,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  Signal,
  computed,  
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'lib-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  private dialog = inject(MatDialog);
  @Input() title: string = 'Default Title';
  @Input() content: string = 'Default Message';
  @Input() confirmLabel: string = 'Confirm';
  @Input() cancelLabel: string = 'Cancel';
  @Input() disableClose: boolean = false;
  @Input() width: string = '400px';
  @Input() height: string = '';
  @Input() hasBackdrop: boolean = true;

  @Output() confirmed = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  dialogref!: MatDialogRef<any>;

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = this.width;
    dialogConfig.height = this.height;
    dialogConfig.disableClose = this.disableClose;
    dialogConfig.hasBackdrop = this.hasBackdrop;

    this.dialogref = this.dialog.open(DialogTemplateComponent, dialogConfig);

    this.dialogref.componentInstance.title = this.title;
    this.dialogref.componentInstance.content = this.content;
    this.dialogref.componentInstance.confirmLabel = this.confirmLabel;
    this.dialogref.componentInstance.cancelLabel = this.cancelLabel;

    this.dialogref.afterClosed().subscribe((result) => {
      if (result === 'confirm'){
        this.confirmed.emit();
      } else {      
        this.canceled.emit();
      }
    });
  }
}

@Component({
  selector: 'lib-dialog-template',
  template: `
    <h2 mat-dialog-title>{{ title }}</h2>
    <div mat-dialog-content>{{ content }}</div>
    <div mat-dialog-actions>
      <button mat-button (click)="close('cancel')">{{ cancelLabel }}</button>
      <button mat-button (click)="close('confirm')">{{ confirmLabel }}</button>
    </div>
    `,
})

export class DialogTemplateComponent {
  title: string = '';
  content: string = '';
  confirmLabel: string = 'confirm';
  cancelLabel: string = 'cancel';

  constructor(private dialogRef: MatDialogRef<DialogTemplateComponent>) {}

  close(result: string): void {
    this.dialogRef.close(result);
  }
}