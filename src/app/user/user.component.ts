import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUsers } from '../shared/users/user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck } from 'rxjs';
import { UnSubscriber } from '../shared/utils/unsubscriber';
import { Store } from '@ngrx/store';
import { getUsersPending } from './store/actions/users.actions';
import { IUsersState } from './store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends UnSubscriber implements OnInit {
  @Output() public remove: EventEmitter<string> = new EventEmitter();

  public title$ = this.activatedRoute.data.pipe(pluck('title'));

  public users$: Observable<IUsers[]> = this.store.select('users');

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private store: Store<IUsersState>
  ) {
    super();
  }

  public removeUser(name: string | undefined): void {
    if (name) {
      this.remove.emit(name);
    }
  }

  public ngOnInit() {
    this.store.dispatch(getUsersPending());
  }
}
