import { Action, createReducer, on } from '@ngrx/store';
import { getUsersSuccess } from '../actions/users.actions';
import { IUsers } from '../../../shared/users/user.service';

export const initialState: IUsers[] = [];

const _usersReducer = createReducer(
	initialState,
	on(getUsersSuccess, (_state, { users }) => {
		return users;
	}),
);

export function usersReducer(state: IUsers[] | undefined, action: Action) {
	return _usersReducer(state, action);
}
