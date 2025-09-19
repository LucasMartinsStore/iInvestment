import { Component, inject, output } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { STRING_CONSTANTS } from '../../../../shared/constants/string-contants';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bottom-sheet',
  imports: [MatListModule, MatRadioModule, FormsModule, MatButtonModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss',
})
export class BottomSheetComponent {
  order!: string;
  orderBy: string[] = ['Ordernar Crescente', 'Ordernar Decrescente'];

  orderByEvent = output<string>();

  bottomSheetTitle = STRING_CONSTANTS.BOTTOM_SHEET_TITLE;
  bottomSheetButton = STRING_CONSTANTS.BOTTOM_SHEET_BUTTON;

  private _bottomSheetRef = inject<MatBottomSheetRef<unknown>>(MatBottomSheetRef);

  applyOrder() {
    this.orderByEvent.emit(this.order);
    this._bottomSheetRef.dismiss();
  }
}
