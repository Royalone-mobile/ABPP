"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/models/user/user");
var user_service_1 = require("../../shared/models/user/user.service");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var sqlite_1 = require("../../shared/data/providers/sqlite");
var LoginComponent = (function () {
    function LoginComponent(
        //private router: Router,
        routerExtensions, userService, page, db) {
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.page = page;
        this.db = db;
        this.isLoggingIn = true;
        this.isLoading = true;
        this.user = new user_1.User();
        //Debug
        this.user.username = 'ABPP';
        this.user.password = 'ABPP#absc';
        //this.login(); 
        this.routerExtensions.navigate(["/home"], {
            clearHistory: true,
            transition: {
                name: "fade",
                duration: 400,
                curve: "linear"
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
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.isLoading = false;
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.sendEmail();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.login(this.user)
            .subscribe(function (res) {
            _this.routerExtensions.navigate(["/home"], {
                clearHistory: true,
                transition: {
                    name: "fade",
                    duration: 400,
                    curve: "linear"
                }
            });
        }, function (error) {
            _this.isLoading = false;
            alert("Login mislukt. Controleer uw gebruikersnaam/wachtwoord");
        });
    };
    LoginComponent.prototype.sendEmail = function () {
        var _this = this;
        this.userService.sendEmail(this.user)
            .subscribe(function () {
            alert("Bedankt voor uw aanvraag. We zullen zo snel mogelijk contact met U opnemen.");
            _this.toggleDisplay();
        }, function () { return alert("Er is iets misgegaan met uw aanvraag. Probeer het later nogmaals."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "login",
        providers: [user_service_1.UserService, sqlite_1.Sqlite],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        user_service_1.UserService,
        page_1.Page,
        sqlite_1.Sqlite])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUFxRDtBQUNyRCxzRUFBb0U7QUFDcEUsc0RBQStEO0FBQy9ELGdDQUErQjtBQUkvQiw2REFBNEQ7QUFTNUQsSUFBYSxjQUFjO0lBT3pCO1FBQ0UseUJBQXlCO1FBQ2pCLGdCQUFrQyxFQUNsQyxXQUF3QixFQUN4QixJQUFVLEVBQ1YsRUFBVztRQUhYLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLE9BQUUsR0FBRixFQUFFLENBQVM7UUFWckIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQVVmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUV2QixPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNqQyxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUM5QjtZQUNFLFlBQVksRUFBQyxJQUFJO1lBQ2pCLFVBQVUsRUFBQztnQkFDVCxJQUFJLEVBQUMsTUFBTTtnQkFDWCxRQUFRLEVBQUMsR0FBRztnQkFDWixLQUFLLEVBQUMsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQTJCSztJQUNQLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDLFNBQVMsQ0FDUixVQUFDLEdBQUc7WUFDRixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQ3hDO2dCQUNFLFlBQVksRUFBQyxJQUFJO2dCQUNqQixVQUFVLEVBQUM7b0JBQ1QsSUFBSSxFQUFDLE1BQU07b0JBQ1gsUUFBUSxFQUFDLEdBQUc7b0JBQ1osS0FBSyxFQUFDLFFBQVE7aUJBQ2Y7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osS0FBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUM7WUFDckIsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUE7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNwQyxTQUFTLENBQ1I7WUFDRSxLQUFLLENBQUMsNkVBQTZFLENBQUMsQ0FBQztZQUNyRixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsbUVBQW1FLENBQUMsRUFBMUUsQ0FBMEUsQ0FDakYsQ0FBQztJQUNKLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTFHRCxJQTBHQztBQXJHeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7aURBQUM7QUFMbkMsY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE9BQU87UUFDakIsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxlQUFNLENBQUM7UUFDaEMsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQyx1QkFBdUIsQ0FBQztLQUNwRSxDQUFDO3FDQVc0Qix5QkFBZ0I7UUFDckIsMEJBQVc7UUFDbEIsV0FBSTtRQUNMLGVBQU07R0FaVixjQUFjLENBMEcxQjtBQTFHWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xuaW1wb3J0IHsgU3FsaXRlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kYXRhL3Byb3ZpZGVycy9zcWxpdGVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBTcWxpdGVdLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyIDogVXNlcjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBpc0xvYWRpbmcgPSB0cnVlO1xuICB0ZW1wIDogYW55IDsvLz0gdGhpcy5kYi5nZXRTZXR0aW5nKCd1c2VybmFtZScpO1xuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvL3ByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIGRiIDogU3FsaXRlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcblxuICAgIC8vRGVidWdcbiAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSAnQUJQUCc7XG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gJ0FCUFAjYWJzYyc7XG4gICAgLy90aGlzLmxvZ2luKCk7IFxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6dHJ1ZSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOntcbiAgICAgICAgICAgICAgICAgIG5hbWU6XCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjo0MDAsXG4gICAgICAgICAgICAgICAgICBjdXJ2ZTpcImxpbmVhclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAvKlxuICAgIC8vQ2hlY2sgaWYgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWRcbiAgICB0aGlzLmRiLmdldEF1dGgoKS50aGVuKCh0b2tlbik9PntcbiAgICAgIGlmKHRva2VuICYmIHRva2VuWzJdLmxlbmd0aD4wKXtcbiAgICAgICAgLy9Vc2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5jaGVja1Rva2VuKHRva2VuWzJdKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShyZXMuZCk7XG4gICAgICAgICAgICBpZihyZXMuYXV0aGVudGljYXRlZCl7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6dHJ1ZSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOntcbiAgICAgICAgICAgICAgICAgIG5hbWU6XCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjo0MDAsXG4gICAgICAgICAgICAgICAgICBjdXJ2ZTpcImxpbmVhclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vVXNlciBuaWV0IGF1dGggdm9sZ2VucyByZW1vdGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgYXV0aCcpO1xuICAgICAgICAgICAgZGIuY2xlYXJBbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7Ki9cbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5pc0xvYWRpbmc9ZmFsc2U7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VuZEVtYWlsKCk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgXG4gICAgICAgIHtcbiAgICAgICAgICBjbGVhckhpc3Rvcnk6dHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uOntcbiAgICAgICAgICAgIG5hbWU6XCJmYWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjo0MDAsXG4gICAgICAgICAgICBjdXJ2ZTpcImxpbmVhclwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmc9ZmFsc2U7XG4gICAgICAgIGFsZXJ0KFwiTG9naW4gbWlzbHVrdC4gQ29udHJvbGVlciB1dyBnZWJydWlrZXJzbmFhbS93YWNodHdvb3JkXCIpICBcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRFbWFpbCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnNlbmRFbWFpbCh0aGlzLnVzZXIpXG4gICAgLnN1YnNjcmliZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJCZWRhbmt0IHZvb3IgdXcgYWFudnJhYWcuIFdlIHp1bGxlbiB6byBzbmVsIG1vZ2VsaWprIGNvbnRhY3QgbWV0IFUgb3BuZW1lbi5cIik7XG4gICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgfSxcbiAgICAgICgpID0+IGFsZXJ0KFwiRXIgaXMgaWV0cyBtaXNnZWdhYW4gbWV0IHV3IGFhbnZyYWFnLiBQcm9iZWVyIGhldCBsYXRlciBub2dtYWFscy5cIilcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cbn1cbiJdfQ==