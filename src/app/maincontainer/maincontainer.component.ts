import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {

  id;
  profileImage;
  username;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userIndex = this.route.snapshot.params.userIndex;
    this.userService.getUsers().subscribe((users) => {
      const user = users[userIndex];
      if (user) {
        this.id = user.id;
        this.profileImage = user.profileImage;
        this.username = user.username;
      }
    });
  }

}
