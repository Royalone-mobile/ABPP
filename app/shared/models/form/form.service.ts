import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Form } from "./form"
import { Config } from "../../config"
import { Sqlite } from "../../data/providers/sqlite";

@Injectable()
export class FormService {
    private id: any;
    private auth: any;

    constructor(private http: Http, private db: Sqlite){ 
        this.id = Config.guid;
        this.auth = Config.authToken;
    }
    
    loadPage(page_id: Number){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        console.log(JSON.stringify({
                ID: page_id,
                GUID: this.auth
            }),
            { headers: headers}
            );
        return this.http.post(
            Config.apiUrl + "GetPage",
            JSON.stringify({
                ID: page_id,
                GUID: this.auth
            }),
            { headers: headers}
        )
        .map(response => {
            let data = response.json();
            data = JSON.parse(data.d);
            console.log("data:" + data);
            return data;
        })
        .catch(this.handleErrors)
        .publishReplay(1)
        .refCount();
    }

    loadMenu(){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(
            Config.apiUrl + "GetCustomer",
            JSON.stringify({
                ID: this.id,
                GUID: this.auth
            }),
            { headers: headers}
        )
        .map(response => {
            let menuArray = [];
            let data = response.json();
            let settings = JSON.parse(data.d);
            settings.Menu.MenuItems.forEach((item) => {
                menuArray.push({
                    id:item.Id,title:item.Title,page_id:item.Page_Id
                });
            });
            return menuArray;
        })
        .catch(this.handleErrors)
        .publishReplay(1)
        .refCount();
    }

    handleErrors(error: Response){
        console.log(error.status +' - '+JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}