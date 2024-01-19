import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent {
 constructor(public todoService:TodoService, public userService: UserService,
  private router:Router){

    if(localStorage.getItem("token"))
    {
userService.btnSignValue='Sign out'
    } else userService.btnSignValue='Sign in'
  }

//  signOut()
//  {
//   localStorage.removeItem("token")
//   window.location.reload()
//   this.router.navigateByUrl('/signin')
//  }

 
}
