import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
//import { NativeScriptLocalizeModule } from "nativescript-localize";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { DynamicComponent } from "./shared/components/dynamic.component"
import { Sqlite } from "./shared/data/providers/sqlite";
import { routes, navigatableComponents } from "./app.routing";
import { CheckBox } from 'nativescript-checkbox';
import { registerElement } from "nativescript-angular/element-registry";
registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);

//import { DropDownModule } from "nativescript-drop-down/angular";

@NgModule({
  declarations: [
    AppComponent,
    ...navigatableComponents,
    SIDEDRAWER_DIRECTIVES
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
    //DropDownModule,
    //,NativeScriptLocalizeModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    Sqlite,
    { provide : 'DynamicComponent', useClass: DynamicComponent}
  ]
})
export class AppModule {}
