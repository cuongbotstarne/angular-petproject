import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//MODEL
import { User } from '../user';

//SERVICE
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService
      .getUser(id)
      .subscribe((user) => (this.user = user as User));
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.userService.putUser(this.user).subscribe(() => this.goBack());
  }
}
