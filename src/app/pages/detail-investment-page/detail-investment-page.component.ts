import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { InvestmentResponse } from '../home-page/interface/investment-response';
import { SharedService } from '../../shared/services/shared/shared.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-detail-investment-page',
  imports: [HeaderComponent],
  templateUrl: './detail-investment-page.component.html',
  styleUrl: './detail-investment-page.component.scss',
})
export class DetailInvestmentPageComponent implements OnInit {
  selectedInvestment = signal<InvestmentResponse | null>(null);

  private _sharedService = inject(SharedService);
  private _destroyRef = inject(DestroyRef);
  private _router = inject(Router);

  ngOnInit() {
    this._getDetailsData();
  }

  private _getDetailsData() {
    this._sharedService.selectedInvestment$
      .pipe(takeUntilDestroyed(this._destroyRef), take(1))
      .subscribe({
        next: (investment) => {
          console.log(investment);
          this.selectedInvestment.set(investment);
        },
        error: () => {
          this._router.navigate(['/']);
        },
      });
  }
  goBack() {
    this._router.navigate(['/']);
  }
}
