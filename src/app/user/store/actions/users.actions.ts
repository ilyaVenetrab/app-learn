import { createAction, props } from '@ngrx/store';
import { IUsers } from '../../../shared/users/user.service';

export const getUsersPending = createAction('[Users] get users pending');
export const getUsersSuccess = createAction(
	'[Users] get users success',
	props<{ users: IUsers[] }>(),
);
export const getUsersError = createAction('[Users] get users error');
