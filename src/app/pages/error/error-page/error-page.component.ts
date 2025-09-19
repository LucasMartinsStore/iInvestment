import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { STRING_CONSTANTS } from '../../../shared/constants/string-contants';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-page',
  imports: [MatButtonModule],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss',
})
export class ErrorPageComponent {
  errorPageMessage = STRING_CONSTANTS.ERROR_PAGE_MESSAGE;
  errorPageSubmessage = STRING_CONSTANTS.ERROR_PAGE_SUBMESSAGE;
  errorPageButton = STRING_CONSTANTS.ERROR_PAGE_BUTTON;

  private _router = inject(Router);

  goBack() {
    this._router.navigate(['/']);
  }
}
