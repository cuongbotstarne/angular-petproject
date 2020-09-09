import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

//SERVICE
import { UserService } from '../user.service';

//MODEL
import { User } from '../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  userNewInput: User;
  @Output() isCreatedSuccessful = new EventEmitter<boolean>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userNewInput = new User();
  }

  postUser(user: User) {
    this.userService.postUser(user).subscribe((res) => {
      this.isCreatedSuccessful.emit(true);
      this.userNewInput = new User();
    });
  }
}
