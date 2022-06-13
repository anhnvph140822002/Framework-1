import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/product';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   // @Output() createProduct = new EventEmitter<{ email: string, password: string }>();
   users!: IUser[];
   user:IUser = {
     username: "",
     email: "",
     password: "",
     role: 1
   }
  constructor(
    private userService: UserService,
    private route:Router,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
  }
  onSubmit() {
    try {
      console.log(this.user);
      // call service userSerive register
        this.userService.register(this.user).subscribe(data => {
        alert("Register Successfully !");
       
        //chuyển hướng tới login
        this.route.navigateByUrl("/signin");       
      })
    } catch (error) {
      
      alert("Lỗi rồi");
    }
  }  
}
