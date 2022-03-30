import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from './store/reducers/users.reducers';
import { UsersEffects } from './store/effects/users.effects';

@NgModule({
  declarations: [UserComponent],
  imports: [
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersModule {}
