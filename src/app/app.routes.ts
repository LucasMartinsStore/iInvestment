import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/routes').then((m) => m.homeRoutes),
    title: 'iInvestment - Home',
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq-page/routes').then((m) => m.faqRoutes),
    title: 'iInvestment - FAQ',
  },
  {
    path: 'detail-investment',
    loadChildren: () =>
      import('./pages/detail-investment-page/routes').then((m) => m.detailInvestmentRoutes),
    title: 'iInvestment - Detail Investment',
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error-page/routes').then((m) => m.errorRoutes),
    title: 'iInvestment - Erro',
  },
];
