import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { User } from "../../shared/models/user/user";
import { UserService } from "../../shared/models/user/user.service";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { Config } from "../../shared/config";
import { Sqlite } from "../../shared/data/providers/sqlite";

@Component({
  selector: "login",
  providers: [UserService, Sqlite],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css","pages/login/login.css"]
})

export class LoginComponent implements OnInit {
  user : User;
  isLoggingIn = true;
  isLoading = true;
  temp : any ;//= this.db.getSetting('username');
  @ViewChild("container") container: ElementRef;

  constructor(
    //private router: Router,
    private routerExtensions: RouterExtensions,
    private userService: UserService,
    private page: Page,
    private db : Sqlite) {
    this.user = new User();

    //Debug
    this.user.username = 'ABPP';
    this.user.password = 'ABPP#absc';
    //this.login(); 
    this.routerExtensions.navigate(["/home"], 
              {
                clearHistory:true,
                transition:{
                  name:"fade",
                  duration:400,
                  curve:"linear"
                }
              });
    /*
    //Check if user is already authenticated
    this.db.getAuth().then((token)=>{
      if(token && token[2].length>0){
        //User is authenticated
        this.userService.checkToken(token[2])
        .subscribe(
          (res) => {
            let json = JSON.parse(res.d);
            if(res.authenticated){
              this.routerExtensions.navigate(["/home"], 
              {
                clearHistory:true,
                transition:{
                  name:"fade",
                  duration:400,
                  curve:"linear"
                }
              });
            }
            //User niet auth volgens remote
            console.log('not auth');
            db.clearAll();
          }
        );
        this.isLoading = false;
      }
    });*/
  }

  ngOnInit(){
    this.page.actionBarHidden = true;
    this.isLoading=false;
  }

  submit() {
    if (this.isLoggingIn) {
      this.login(); 
    } else {
      this.sendEmail();
    }
  }

  login() {
    this.isLoading = true;
    this.userService.login(this.user)
    .subscribe(
      (res) => {
        this.routerExtensions.navigate(["/home"], 
        {
          clearHistory:true,
          transition:{
            name:"fade",
            duration:400,
            curve:"linear"
          }
        });
      },
      (error) => {
        this.isLoading=false;
        alert("Login mislukt. Controleer uw gebruikersnaam/wachtwoord")  
    });
  }

  sendEmail() {
    this.userService.sendEmail(this.user)
    .subscribe(
      () => {
        alert("Bedankt voor uw aanvraag. We zullen zo snel mogelijk contact met U opnemen.");
        this.toggleDisplay();
      },
      () => alert("Er is iets misgegaan met uw aanvraag. Probeer het later nogmaals.")
    );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
