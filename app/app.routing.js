"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var home_component_1 = require("./pages/home/home.component");
var form_component_1 = require("./pages/form/form.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    {
        path: "home",
        component: home_component_1.HomeComponent,
        children: [
            { path: "", component: form_component_1.FormComponent },
            { path: ":page_id", component: form_component_1.FormComponent }
        ]
    }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    home_component_1.HomeComponent,
    form_component_1.FormComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCw4REFBNEQ7QUFDNUQsOERBQTREO0FBRS9DLFFBQUEsTUFBTSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUV2QztRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNSLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUMsOEJBQWEsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLDhCQUFhLEVBQUM7U0FDMUM7S0FDRjtDQUNKLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYiw4QkFBYTtDQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9mb3JtL2Zvcm0uY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgXG4gICAge1xuICAgICAgcGF0aDogXCJob21lXCIsIFxuICAgICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge3BhdGg6XCJcIiwgY29tcG9uZW50OkZvcm1Db21wb25lbnR9LFxuICAgICAgICB7cGF0aDpcIjpwYWdlX2lkXCIsY29tcG9uZW50OkZvcm1Db21wb25lbnR9XG4gICAgICBdXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbiAgTG9naW5Db21wb25lbnQsXG4gIEhvbWVDb21wb25lbnQsXG4gIEZvcm1Db21wb25lbnRcbl07Il19