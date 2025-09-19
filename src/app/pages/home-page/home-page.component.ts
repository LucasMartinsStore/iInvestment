import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { InvestmentResponseService } from './service/investment-response/investment-response.service';
import { InvestmentResponse } from './interface/investment-response';
import { CardInvestmentsComponent } from './components/card-investments/card-investments.component';
import { take, pipe } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ListFilter, LucideAngularModule } from 'lucide-angular';
import { SharedService } from '../../shared/services/shared/shared.service';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { OrderType } from './interface/types/order-type';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    LucideAngularModule,
    CardInvestmentsComponent,
    MatProgressSpinnerModule,
    MatBottomSheetModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  investmentList = signal<InvestmentResponse[]>([]);
  isLoading = signal(true);
  orderType!: OrderType;

  readonly listFilter = ListFilter;

  private _router = inject(Router);
  private _location = inject(Location);
  private _investmentResponseService = inject(InvestmentResponseService);
  private _sharedService = inject(SharedService);
  private _destroyRef = inject(DestroyRef);
  private _bottomSheet = inject(MatBottomSheet);

  ngOnInit() {
    this._getInvestments();
  }

  openBottomSheet() {
    const bottomSheetRef = this._bottomSheet.open(BottomSheetComponent);

    const subscription = bottomSheetRef.instance.orderByEvent.subscribe((orderType: string) => {
      this._sortInvestments(orderType as OrderType);
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
      subscription.unsubscribe();
    });
  }
  goToFaq() {
    this._router.navigate(['faq']);
  }

  goBack() {
    this._location.back();
  }
  onInvestmentSelected(investment: InvestmentResponse) {
    this._sharedService.setSelectedInvestment(investment);
    this._router.navigate(['detail-investment']);
  }

  private _sortInvestments(orderType: OrderType) {
    const currentList = this.investmentList();

    if (!orderType || currentList.length === 0) {
      return;
    }

    let sortedList: InvestmentResponse[] = [];

    if (orderType === 'Ordernar Crescente') {
      sortedList = [...currentList].sort((a, b) => {
        const dateA = new Date(a.dataCompra || 0);
        const dateB = new Date(b.dataCompra || 0);
        return dateA.getTime() - dateB.getTime();
      });
    } else if (orderType === 'Ordernar Decrescente') {
      sortedList = [...currentList].sort((a, b) => {
        const dateA = new Date(a.dataCompra || 0);
        const dateB = new Date(b.dataCompra || 0);
        return dateB.getTime() - dateA.getTime();
      });
    }

    this.investmentList.set(sortedList);
  }

  private _getInvestments() {
    this._investmentResponseService
      .getInvestmentsAll()
      .pipe(takeUntilDestroyed(this._destroyRef), take(1))
      .subscribe({
        next: (response) => {
          this.investmentList.set(response);
          this._sharedService.setInvestmentList(response);
          this.isLoading.set(false);
        },
        error: () => {
          this._router.navigate(['error']);
        },
      });
  }
}
