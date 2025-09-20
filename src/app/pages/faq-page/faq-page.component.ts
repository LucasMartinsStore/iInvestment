import { Component, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Router } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { STRING_CONSTANTS } from '../../shared/constants/string-contants';

@Component({
  selector: 'app-faq-page',
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    HeaderComponent,
    MatNativeDateModule,
  ],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss',
})
export class FaqPageComponent {
  faqPageTitle = STRING_CONSTANTS.FAQ_PAGE_TITLE;
  faqPageAccordion1Title = STRING_CONSTANTS.FAQ_PAGE_ACCORDION_1_TITLE;
  faqPageAccordion1Content = STRING_CONSTANTS.FAQ_PAGE_ACCORDION_1_CONTENT;
  faqPageAccordion2Title = STRING_CONSTANTS.FAQ_PAGE_ACCORDION_2_TITLE;
  faqPageAccordion2Content = STRING_CONSTANTS.FAQ_PAGE_ACCORDION_2_CONTENT;
  faqPageAccordion3Title = STRING_CONSTANTS.FAQ_PAGE_ACCORDION_3_TITLE;
  faqPageAccordion3Content = STRING_CONSTANTS.FAQ_PAGE_ACCORDION_3_CONTENT;

  accordion = viewChild.required(MatAccordion);

  private _router = inject(Router);

  goBack() {
    this._router.navigate(['/']);
  }
}
