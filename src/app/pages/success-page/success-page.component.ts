import { Component, inject, OnInit, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CheckValidation } from './interface/types/check-validation';
import { Router } from '@angular/router';
import { LucideAngularModule, Lock } from 'lucide-angular';

@Component({
  selector: 'app-success-page',
  imports: [MatProgressSpinnerModule, LucideAngularModule],
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.scss',
})
export class SuccessPageComponent implements OnInit {
  paymentStatus = signal<CheckValidation>('loading');
  timeoutId?: number;
  lockIcon = Lock;

  isSuccess = signal(true);
  isLoading = signal(true);

  private _router = inject(Router);

  ngOnInit() {
    this._simulatePaymentVerification();
  }

  private _simulatePaymentVerification() {
    const delay = Math.random() * 1000 + 2000;

    this.timeoutId = setTimeout(() => {
      const success = Math.random() > 0.1;

      this.isLoading.set(false);
      this.isSuccess.set(success);
      this.paymentStatus.set(success ? 'success' : 'error');
      if (!success) {
        setTimeout(() => {
          this._router.navigate(['error']);
        }, 1500);
      } else {
        setTimeout(() => {
          this._router.navigate(['/']);
        }, 2000);
      }
    }, delay);
  }
}
