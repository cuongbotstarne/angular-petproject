import { Component, OnInit } from '@angular/core';

//SERVICE
import { UserService } from '../user.service';

//MODEL
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[];
  userEditedInput: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    this.userEditedInput = new User();
  }
  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res as User[];
    });
  }
  toggleEditBtn(user: User = new User()) {
    this.userEditedInput = { ...user };
  }
  putUser(user: User) {
    this.userService.putUser(user).subscribe((res) => {
      this.getUsers();
      this.userEditedInput = new User();
    });
  }
  deleteUser(_id: String) {
    this.userService.deleteUser(_id).subscribe((res) => {
      this.getUsers();
      this.userEditedInput = new User();
    });
  }
}
