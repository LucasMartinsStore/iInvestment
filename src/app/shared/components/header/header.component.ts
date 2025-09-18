import { Component, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ArrowLeft, CircleQuestionMark, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly arrowLeft = ArrowLeft;
  readonly circleQuestionMark = CircleQuestionMark;

  goToFaq = output();
  goToBack = output();
}
