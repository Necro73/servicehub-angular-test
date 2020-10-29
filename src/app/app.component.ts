import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';  // NEW OnInit
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TabNavigatorConfig } from '../components/tab-navigator/tab-navigator-config.interface';
import { environment } from '../environments/environment';
import { AppStateService } from '../state/app/app-state.service';
import { StateRoot } from '../state/state-root.interface';

import { HttpClient} from '@angular/common/http'; // NEW
import {User} from './user';  // NEW

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{  // NEW implements OnInit
  public readonly navigationConfig: TabNavigatorConfig = [
    {
      name: 'Результаты поиска',
      route: ['./', 'search']
    },
    {
      name: 'Закладки',
      route: ['./', 'bookmarks']
    }
  ];

  user: User; // NEW

  public readonly filter$: Observable<string> = this.appStateService.filter$;
  constructor(private appStateService: AppStateService,
              private store: Store<StateRoot>,
              private http: HttpClient) { // NEW  private http: HttpClient
    if (!environment.production) {
      // tslint:disable-next-line
      window['dispatch'] = this.store.dispatch.bind(store);
    }
  }

  public setFilter(value: string): void {
    this.appStateService.setFilter(value);
  }

  ngOnInit() {
    this.http.get('assets/user.json').subscribe((data: User) => this.user = data);
  }
}
