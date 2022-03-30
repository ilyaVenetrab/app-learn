import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, switchMap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { getUsersPending, getUsersSuccess } from '../actions/users.actions';
import { UserService } from '../../../shared/users/user.service';

@Injectable()
export class UsersEffects {
	public getUsersPending$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getUsersPending),
			switchMap(() =>
				this.usersService.getAll().pipe(
					map((users: any) => {
						return getUsersSuccess({ users });
					}),
					catchError(() => EMPTY),
				),
			),
		),
	);

	public constructor(private actions$: Actions, private usersService: UserService) {}
}
