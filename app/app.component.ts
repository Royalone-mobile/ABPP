import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector : "app",
  template : `
  <StackLayout>
    <page-router-outlet></page-router-outlet>
  </StackLayout>`
})

export class AppComponent{}