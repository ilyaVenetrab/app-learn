import { Component, OnInit } from '@angular/core';
import { IUsers, UserService } from './shared/users/user.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'app-learn';
  public users: any;

  constructor(
    private _usersService: UserService,
    private readonly router: Router
  ) {}

  /*private _updateUsers() {
    this._usersService.getAll().subscribe((users: IUsers) => {
      this.users = users;
      this._usersService.setUsers(this.users);
    });
  }*/

  public addUser(userData: IUsers): void {
    if (!userData) {
      return;
    }
    this.users = this._usersService.add(userData);
  }

  /*public removeUser(name: string): void {
    this.users = this._usersService.remove(name);
  }*/

  public async ngOnInit() {
    // this._updateUsers();

    this.router.events
      .pipe(
        // tap((e) => console.log(e)),
        filter((e) => e instanceof NavigationStart && e?.id === 1),
      )
      .subscribe(() => {
        //console.log(e);
      });
  }
}
