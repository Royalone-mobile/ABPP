"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../shared/config");
var form_service_1 = require("../../shared/models/form/form.service");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var connectivity = require("connectivity");
var sqlite_1 = require("../../shared/data/providers/sqlite");
var HomeComponent = (function () {
    function HomeComponent(formService, _changeDetectionRef, routerExtensions, route, router, zone, db) {
        this.formService = formService;
        this._changeDetectionRef = _changeDetectionRef;
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.db = db;
        this.pages = [];
        this.isLoading = true;
        this.isConnected = false;
        this.pageTitle = 'Startpagina';
        this.username = config_1.Config.username;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Init drawer
        this.drawer = this.drawerComponent.sideDrawer;
        if (this.drawer.ios) {
            //Dit zorgt ervoor dat de sidemenu op iOS ook een mooie schaduw heeft
            //Android heeft dit automagisch.
            this.drawer.ios.defaultSideDrawer.style.shadowMode = 2;
            this.drawer.ios.defaultSideDrawer.style.dimOpacity = 0.35;
            this.drawer.ios.defaultSideDrawer.style.shadowOpacity = 0.75;
            this.drawer.ios.defaultSideDrawer.style.shadowRadius = 5;
            this.drawer.ios.defaultSideDrawer.transitionDuration = 0.4;
        }
        this.formService.loadMenu()
            .subscribe(function (menuList) {
            //JSON Menu
            _this.pages = menuList;
            //Standaard demo pagina
            _this.pages.unshift({ id: '99', title: 'Startpagina' });
            _this.isLoading = false;
        });
        this.checkConnection();
        this._changeDetectionRef.detectChanges();
        //Debug
        this.pageTitle = 'Debug';
        this.router.navigate(["home", 1]);
        this.drawer.closeDrawer();
        this._changeDetectionRef.detectChanges();
        //
        connectivity.startMonitoring(function onConnectionTypeChanged(newConnectionType) {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    //console.log("Connection type changed to none.");
                    this.isConnected = false;
                    config_1.Config.isNetworkAvailable = false;
                    break;
                case connectivity.connectionType.wifi:
                    //console.log("Connection type changed to WiFi.");
                    this.isConnected = true;
                    config_1.Config.isNetworkAvailable = true;
                    break;
                case connectivity.connectionType.mobile:
                    //console.log("Connection type changed to mobile.");
                    this.isConnected = true;
                    config_1.Config.isNetworkAvailable = true;
                    break;
            }
        });
    };
    HomeComponent.prototype.checkConnection = function () {
        switch (connectivity.getConnectionType()) {
            case connectivity.connectionType.none:
                this.isConnected = false;
                config_1.Config.isNetworkAvailable = false;
                break;
            case connectivity.connectionType.wifi:
                this.isConnected = true;
                config_1.Config.isNetworkAvailable = true;
                break;
            case connectivity.connectionType.mobile:
                this.isConnected = true;
                config_1.Config.isNetworkAvailable = true;
                break;
            default:
                this.isConnected = false;
                break;
        }
        this._changeDetectionRef.detectChanges();
    };
    HomeComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    HomeComponent.prototype.onMenuItemTap = function (args) {
        var page = this.pages[args.index];
        this.pageTitle = page['title'];
        this.router.navigate(["home", page['id']]);
        this.drawer.closeDrawer();
        this._changeDetectionRef.detectChanges();
    };
    HomeComponent.prototype.tapOfflineLabel = function () {
        alert("U kunt nog steeds gebruik maken van de app. " +
            "Nieuwe formulieren en opgeslagen formulieren worden automatisch" +
            "gesynchroniseerd zodra er weer een internet verbinding beschikbaar is.");
    };
    HomeComponent.prototype.tapCall = function () {
        alert(1);
    };
    HomeComponent.prototype.tapLogout = function () {
        this.db.clearAll();
        this.routerExtensions.navigate(["/"], {
            clearHistory: true,
            transition: {
                name: "fade",
                duration: 400,
                curve: "linear"
            }
        });
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], HomeComponent.prototype, "drawerComponent", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "pages/home/home.html",
        styleUrls: ["pages/home/home-common.css", "pages/home/home.css"],
        providers: [form_service_1.FormService]
    }),
    __metadata("design:paramtypes", [form_service_1.FormService,
        core_1.ChangeDetectorRef,
        router_1.RouterExtensions,
        router_2.ActivatedRoute,
        router_2.Router,
        core_1.NgZone,
        sqlite_1.Sqlite])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtSDtBQUVuSCw4Q0FBNkM7QUFFN0Msc0VBQW9FO0FBQ3BFLHNEQUErRDtBQUMvRCwwQ0FBeUQ7QUFDekQsc0VBQW9HO0FBQ3BHLDJDQUE2QztBQUM3Qyw2REFBNEQ7QUFTNUQsSUFBYSxhQUFhO0lBV3hCLHVCQUNVLFdBQXdCLEVBQ3hCLG1CQUFzQyxFQUN0QyxnQkFBa0MsRUFDbEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLElBQVksRUFDWixFQUFVO1FBTlYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQWhCYixVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdBQWEsS0FBSyxDQUFDO1FBQzlCLGNBQVMsR0FBRyxhQUFhLENBQUM7UUFDMUIsYUFBUSxHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUM7SUFhL0IsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFBQSxpQkFxREM7UUFwREMsYUFBYTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFFOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLHFFQUFxRTtZQUNyRSxnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsS0FBSyxD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VSxFQUFDO2dCQUNULElBQUksRUFBQyxNQUFNO2dCQUNYLFFBQVEsRUFBQyxHQUFHO2dCQUNaLEtBQUssRUFBQyxRQUFRO2FBQ2Y7U0FDRixDQUFDLENBQUM7SUFDVCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBcklELElBcUlDO0FBNUhDO0lBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDVixnQ0FBc0I7c0RBQUM7QUFUcEMsYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO0tBQzNCLENBQUM7cUNBY3VCLDBCQUFXO1FBQ0gsd0JBQWlCO1FBQ3BCLHlCQUFnQjtRQUMzQix1QkFBYztRQUNiLGVBQU07UUFDUixhQUFNO1FBQ1IsZUFBTTtHQWxCVCxhQUFhLENBcUl6QjtBQXJJWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvZm9ybS9mb3JtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7ICBcbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XG5pbXBvcnQgeyBTcWxpdGUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RhdGEvcHJvdmlkZXJzL3NxbGl0ZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiaG9tZVwiLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2hvbWUvaG9tZS1jb21tb24uY3NzXCIsIFwicGFnZXMvaG9tZS9ob21lLmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbIEZvcm1TZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuICBwdWJsaWMgcGFnZXM6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgcHJpdmF0ZSBpc0xvYWRpbmcgOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBpc0Nvbm5lY3RlZCA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwYWdlVGl0bGUgPSAnU3RhcnRwYWdpbmEnO1xuICBwcml2YXRlIHVzZXJuYW1lID0gQ29uZmlnLnVzZXJuYW1lO1xuXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudClcbiAgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZGI6IFNxbGl0ZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgLy9Jbml0IGRyYXdlclxuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcblxuICAgIGlmICh0aGlzLmRyYXdlci5pb3MpIHtcbiAgICAgIC8vRGl0IHpvcmd0IGVydm9vciBkYXQgZGUgc2lkZW1lbnUgb3AgaU9TIG9vayBlZW4gbW9vaWUgc2NoYWR1dyBoZWVmdFxuICAgICAgLy9BbmRyb2lkIGhlZWZ0IGRpdCBhdXRvbWFnaXNjaC5cbiAgICAgIHRoaXMuZHJhd2VyLmlvcy5kZWZhdWx0U2lkZURyYXdlci5zdHlsZS5zaGFkb3dNb2RlID0gMjsgXG4gICAgICB0aGlzLmRyYXdlci5pb3MuZGVmYXVsdFNpZGVEcmF3ZXIuc3R5bGUuZGltT3BhY2l0eSA9IDAuMzU7XG4gICAgICB0aGlzLmRyYXdlci5pb3MuZGVmYXVsdFNpZGVEcmF3ZXIuc3R5bGUuc2hhZG93T3BhY2l0eSA9IDAuNzU7XG4gICAgICB0aGlzLmRyYXdlci5pb3MuZGVmYXVsdFNpZGVEcmF3ZXIuc3R5bGUuc2hhZG93UmFkaXVzID0gNTsgXG4gICAgICB0aGlzLmRyYXdlci5pb3MuZGVmYXVsdFNpZGVEcmF3ZXIudHJhbnNpdGlvbkR1cmF0aW9uID0gMC40O1xuICAgIH1cblxuICAgIHRoaXMuZm9ybVNlcnZpY2UubG9hZE1lbnUoKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBtZW51TGlzdCA9PiB7XG4gICAgICAgIC8vSlNPTiBNZW51XG4gICAgICAgIHRoaXMucGFnZXMgPSBtZW51TGlzdDtcbiAgICAgICAgLy9TdGFuZGFhcmQgZGVtbyBwYWdpbmFcbiAgICAgICAgdGhpcy5wYWdlcy51bnNoaWZ0KHtpZDonOTknLHRpdGxlOidTdGFydHBhZ2luYSd9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuY2hlY2tDb25uZWN0aW9uKCk7IFxuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAvL0RlYnVnXG4gICAgXG4gICAgdGhpcy5wYWdlVGl0bGUgPSAnRGVidWcnO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIiwgMV0pO1xuICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAvL1xuICAgIGNvbm5lY3Rpdml0eS5zdGFydE1vbml0b3JpbmcoZnVuY3Rpb24gb25Db25uZWN0aW9uVHlwZUNoYW5nZWQobmV3Q29ubmVjdGlvblR5cGU6IG51bWJlcikge1xuICAgIHN3aXRjaCAobmV3Q29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBub25lLlwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIENvbmZpZy5pc05ldHdvcmtBdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gdHlwZSBjaGFuZ2VkIHRvIFdpRmkuXCIpO1xuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBDb25maWcuaXNOZXR3b3JrQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiB0eXBlIGNoYW5nZWQgdG8gbW9iaWxlLlwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgQ29uZmlnLmlzTmV0d29ya0F2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuICB9XG5cbiAgXG4gIGNoZWNrQ29ubmVjdGlvbigpe1xuICAgIHN3aXRjaChjb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKSl7XG4gICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmU6XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkPWZhbHNlO1xuICAgICAgICAgICAgQ29uZmlnLmlzTmV0d29ya0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLndpZmk6XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkPXRydWU7XG4gICAgICAgICAgICBDb25maWcuaXNOZXR3b3JrQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICB0aGlzLmlzQ29ubmVjdGVkPXRydWU7XG4gICAgICAgICAgICBDb25maWcuaXNOZXR3b3JrQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrOyBcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZD1mYWxzZTtcbiAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdG9nZ2xlRHJhd2VyKCl7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG4gIG9uTWVudUl0ZW1UYXAoYXJncyl7XG4gICAgbGV0IHBhZ2UgPSB0aGlzLnBhZ2VzW2FyZ3MuaW5kZXhdO1xuICAgIHRoaXMucGFnZVRpdGxlID0gcGFnZVsndGl0bGUnXTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCIsIHBhZ2VbJ2lkJ11dKTtcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICB0YXBPZmZsaW5lTGFiZWwoKXtcbiAgICBhbGVydChcIlUga3VudCBub2cgc3RlZWRzIGdlYnJ1aWsgbWFrZW4gdmFuIGRlIGFwcC4gXCIrXG4gICAgXCJOaWV1d2UgZm9ybXVsaWVyZW4gZW4gb3BnZXNsYWdlbiBmb3JtdWxpZXJlbiB3b3JkZW4gYXV0b21hdGlzY2hcIitcbiAgICBcImdlc3luY2hyb25pc2VlcmQgem9kcmEgZXIgd2VlciBlZW4gaW50ZXJuZXQgdmVyYmluZGluZyBiZXNjaGlrYmFhciBpcy5cIik7XG4gIH1cblxuICB0YXBDYWxsKCl7XG4gICAgYWxlcnQoMSk7XG4gIH1cbiAgXG4gIHRhcExvZ291dCgpe1xuICAgIHRoaXMuZGIuY2xlYXJBbGwoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL1wiXSwgXG4gICAgICAgIHtcbiAgICAgICAgICBjbGVhckhpc3Rvcnk6dHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uOntcbiAgICAgICAgICAgIG5hbWU6XCJmYWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjo0MDAsXG4gICAgICAgICAgICBjdXJ2ZTpcImxpbmVhclwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxufSJdfQ==