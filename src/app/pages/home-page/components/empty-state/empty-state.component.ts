import { STRING_CONSTANTS } from './../../../../shared/constants/string-contants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  imports: [],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
})
export class EmptyStateComponent {
  noInvestmentsMessage = STRING_CONSTANTS.NO_INVESTMENTS_FOUND;
  emptyStateTitle = STRING_CONSTANTS.EMPTY_STATE_TITLE;
  emptyStateDescription = STRING_CONSTANTS.EMPTY_STATE_DESCRIPTION;
}
