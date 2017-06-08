"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { NativeScriptLocalizeModule } from "nativescript-localize";
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var app_component_1 = require("./app.component");
var dynamic_component_1 = require("./shared/components/dynamic.component");
var sqlite_1 = require("./shared/data/providers/sqlite");
var app_routing_1 = require("./app.routing");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
//import { DropDownModule } from "nativescript-drop-down/angular";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_1.navigatableComponents, [
            angular_1.SIDEDRAWER_DIRECTIVES
        ]),
        bootstrap: [app_component_1.AppComponent],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            //DropDownModule,
            //,NativeScriptLocalizeModule
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: [
            sqlite_1.Sqlite,
            { provide: 'DynamicComponent', useClass: dynamic_component_1.DynamicComponent }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QscUVBQXFFO0FBQ3JFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsc0RBQXVFO0FBQ3ZFLGdGQUE4RTtBQUU5RSxzRUFBbUY7QUFFbkYsaURBQStDO0FBRS9DLDJFQUF3RTtBQUN4RSx5REFBd0Q7QUFDeEQsNkNBQThEO0FBRTlELDBFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFFN0Usa0VBQWtFO0FBd0JsRSxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUF0QnJCLGVBQVEsQ0FBQztRQUNSLFlBQVk7WUFDViw0QkFBWTtpQkFDVCxtQ0FBcUI7WUFDeEIsK0JBQXFCO1VBQ3RCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7WUFDeEMsaUJBQWlCO1lBQ2pCLDZCQUE2QjtTQUM5QjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1FBQzNCLFNBQVMsRUFBRTtZQUNULGVBQU07WUFDTixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsb0NBQWdCLEVBQUM7U0FDNUQ7S0FDRixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vL2ltcG9ydCB7IE5hdGl2ZVNjcmlwdExvY2FsaXplTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgU0lERURSQVdFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudCB9IGZyb20gXCIuL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWMuY29tcG9uZW50XCJcbmltcG9ydCB7IFNxbGl0ZSB9IGZyb20gXCIuL3NoYXJlZC9kYXRhL3Byb3ZpZGVycy9zcWxpdGVcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IENoZWNrQm94IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94JztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5yZWdpc3RlckVsZW1lbnQoXCJDaGVja0JveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNoZWNrYm94XCIpLkNoZWNrQm94KTtcblxuLy9pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50cyxcbiAgICBTSURFRFJBV0VSX0RJUkVDVElWRVNcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gICAgLy9Ecm9wRG93bk1vZHVsZSxcbiAgICAvLyxOYXRpdmVTY3JpcHRMb2NhbGl6ZU1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIHByb3ZpZGVyczogW1xuICAgIFNxbGl0ZSxcbiAgICB7IHByb3ZpZGUgOiAnRHluYW1pY0NvbXBvbmVudCcsIHVzZUNsYXNzOiBEeW5hbWljQ29tcG9uZW50fVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19