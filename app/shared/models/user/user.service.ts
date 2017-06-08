import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../../config";
import { Sqlite } from "../../data/providers/sqlite";

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private db: Sqlite
    ){ }

    login(user: User){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.apiUrl + "Login",
            JSON.stringify({
                username: user.username,
                password: user.password
            }),
            { headers: headers }
        )
        .map(response => response.json())
        .do(data => {
            let json = JSON.parse(data.d);
            let settings = {
                'auth':'81',
                'GUID':'1',
                'username':user.username
            };
            Config.authToken = settings.auth;
            Config.guid = settings.GUID;
            Config.username = settings.username;
            this.db.setSettings(settings);
        })
        .catch(this.handleErrors);
    }

    //Functie om te checken of de token REMOTE
    //nog wel geldig is. Zo niet, gebruiker uitloggen.
    //TODO: API
    checkToken(token: String){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.apiUrl + "Login",
            JSON.stringify({
                username: "temp",
                password: "todo",
                auth: token
            }),
            { headers: headers }
        ).map(response=>response.json())
        .catch(this.handleErrors);
    }

    sendEmail(user: User){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.apiUrl + "Email", //TODO: Implement this in API
            JSON.stringify({
                email: user.email,
                name: user.name
            }),
            { headers: headers }
        )
        .catch(this.handleErrors);
    }

    handleErrors(error: Response){
        console.log(error.status +'-'+JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}