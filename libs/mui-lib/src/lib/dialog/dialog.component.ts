import { 
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule,
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

  // Scrollable content configuration
  @Input() isScrollable: boolean = false;

  // Animation inputs
  @Input() enterAnimationDuration: string = '225ms';
  @Input() exitAnimationDuration: string = '195ms';

  // Outputs for user actions
  @Output() confirmed = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  dialogref!: MatDialogRef<any>;

  openDialog(enter: string = '200ms', exit: string = '200ms'): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = this.width;
    dialogConfig.height = this.height;
    dialogConfig.disableClose = this.disableClose;
    dialogConfig.hasBackdrop = this.hasBackdrop;
    dialogConfig.enterAnimationDuration = this.enterAnimationDuration;
    dialogConfig.exitAnimationDuration = this.exitAnimationDuration;

    this.dialogref = this.dialog.open(DialogTemplateComponent, dialogConfig);

    this.dialogref.componentInstance.title = this.title;
    this.dialogref.componentInstance.content = this.content;
    this.dialogref.componentInstance.confirmLabel = this.confirmLabel;
    this.dialogref.componentInstance.cancelLabel = this.cancelLabel;
    this.dialogref.componentInstance.isScrollable = this.isScrollable;

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
  standalone: true,
  templateUrl: './dialog-overview.html',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogTemplateComponent {
  title: string = '';
  content: string = '';
  confirmLabel: string = 'confirm';
  cancelLabel: string = 'cancel';
  isScrollable: boolean = false;

  constructor(private dialogRef: MatDialogRef<DialogTemplateComponent>) {}

  close(result: string): void {
    this.dialogRef.close(result);
  }
}