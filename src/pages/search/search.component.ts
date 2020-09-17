import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingState } from '../../core/loading-state.enum';
import { AppSearchState } from '../../state/app/app-state.interface';
import { AppStateService } from '../../state/app/app-state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  public readonly LoadingState = LoadingState;
  public readonly state$: Observable<AppSearchState> = this.appStateService.search$;

  constructor(private appStateService: AppStateService) {
  }
}
