import { Injectable } from "@angular/core";
import { Repository } from "../repository";
import { Config } from "../../Config";
var sql = require("nativescript-sqlite");

Injectable()
export class Sqlite implements Repository {
    
    private db: any; //DB Handler
    private authToken: any;
    private isInstantiated: boolean; //Singleton style

    //Queries
    private qDbname: string = "abpp.db";
    private qCreateSettingsTable: string = "CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, `key` VARCHAR(100), `value` TEXT)";
    private qCreateFormsTable: string = "CREATE TABLE IF NOT EXISTS forms (id INTEGER PRIMARY KEY AUTOINCREMENT, form_id INTEGER, title TEXT, json TEXT, updated_at DATE DEFAULT (datetime('now','localtime')))";
    private qCreateQueuesTable: string = "CREATE TABLE IF NOT EXISTS queu (id INTEGER PRIMARY KEY AUTOINCREMENT, form_id INTEGER, payload TEXT,  updated_at DATE DEFAULT (datetime('now','localtime')), status INTEGER DEFAULT 0)";

    //Getters
    private qGetSetting = "SELECT * FROM settings WHERE `key`=?";
    private qGetForm = "SELECT * FROM forms where form_id=?";
    private qGetOneQueue = "SELECT * FROM queu WHERE form_id=?";
    private qGetAllQueueStatus = "SELECT * FROM queue WHERE status=?";
    private qGetAllForms = "SELECT * FROM forms";
    private qGetAllSettings = "SELECT * FROM settings";
    private qGetAllQueue = "SELECT * FROM queue";

    //Setters
    private qSetSetting = "INSERT OR REPLACE INTO settings (id, `key`, `value`) VALUES ((SELECT id FROM settings WHERE `key`=?),?,?)";
    private qSetForm = "INSERT OR REPLACE INTO forms (id, form_id, title, json) VALUES ((SELECT id FROM forms WHERE `form_id`=?),?,?,?)";
    private qAddToQueue = "INSERT INTO queu (form_id, payload) VALUES (?,?)";
    private qUpdateQueu = "UPDATE queue SET status=? WHERE form_id=?";
    private qClearQueue = "DELETE * FROM queu";
    private qClearForms = "DELETE * FROM forms";
    private qClearSettings = "DELETE * FROM settings";
    private qDeleteSetting = "DELETE FROM settings WHERE `key`=?";



    public constructor(){
        //DB Aanmaken + tabellen
        if(!this.isInstantiated){
            //sql.deleteDatabase(this.qDbname);
            this.db = (new sql(this.qDbname));
            this.db.then(db=>{ 
                db.execSQL(this.qCreateSettingsTable).then(id=>{
                }, error => {
                    console.error('Failed to create settings table!');
                });

                db.execSQL(this.qCreateFormsTable).then(id=>{
                }, error => {
                    console.error('Failed to create forms table!');
                });

                db.execSQL(this.qCreateQueuesTable).then(id=>{
                }, error => {
                    console.error('Failed to create queus table!');
                });

                //this.db = db;
                this.isInstantiated = true;

            }, error => {
                console.error('Failed to open DB!');
            });
        }
    }

    getDbHandler(){
        return this.db;
    }

    setAuth(token_id){
        return this.setSetting('auth',token_id);
    }

    getAuth(){
        return this.getSetting('auth');
    }

    clearAuth(){
        this.db.then(db=>{
            db.execSQL(this.qDeleteSetting,['auth']).then(()=>{
                return true;
            }, error => this.errorHandler(error));
        });
    }

    setForm(form){
        this.db.then(db=>{
            db.execSQL(this.qSetForm,[form.Id, form.Id,form.Title,form]).then(value=>{
                return true;
            }, error => this.errorHandler(error));
        });
    }

    getForm(form_id){
        return this.db.then(db=>{
            return db.get(this.qGetForm,[form_id], function(err,row){
                //row[2];
            });
        });
    }

    getAllForms(){
        return this.db.then(db=>{
            return db.execSQL(this.qGetAllForms,function(err,rows){});
        });
    }

    clearForms(){
        this.db.then(db=>{
            db.execSQL(this.qClearForms);
        });
    }

    getSettings(){
        return this.db.then(db=>{
            return db.all(this.qGetAllSettings).then(rows=>{
                //console.dump(rows);
                return rows;
            }, error => this.errorHandler(error) );
        });
    } 


    getSetting(key){
        return this.db.then(db=>{
            return db.get(this.qGetSetting,[key], function(err,row){
                if(err){
                    this.errorHandler(err);
                }
            });
        });
    }

    setSetting(key, value){
        return this.db.then(db=>{
            return db.execSQL(this.qSetSetting,[key, key,value]).then(value=>{
            }, error => this.errorHandler(error));
        });
    }

    setSettings(settings){
        return this.db.then(db=>{
            for(let key in settings){
                db.execSQL(this.qSetSetting,[key, key, settings[key]])
                .then(res=>{}, error => this.errorHandler(error));
            }
        });
    }

    clearSettings(){
        this.db.then(db=>{
            db.execSQL(this.qClearSettings);
        });
    }

    addToQueue(form_id, payload){
        return this.db.then(db=>{
            return db.execSQL(this.qAddToQueue,[form_id, payload]).then(id=>{
                //returns ID
            }, error => this.errorHandler(error));
        });
       
    }

    getOneQueue(queu_id){
        return this.db.then(db=>{
            return db.get(
                this.qGetOneQueue,[queu_id],
                function(err,row){}
            );
        });
    }

    getQueueWithStatus(status){
        return this.db.then(db=>{
            return db.execSQL(
                this.qGetAllQueueStatus,[status], 
                function(err,rows){}
            );
        }); 
    }

    getQueue(){
        return this.db.then(db=>{
            return db.execSQL(
                this.qGetAllQueue, 
                function(err,rows){}
            );
        });
    }

    clearQueu(){
        this.db.then(db=>{
            db.execSQL(this.qClearQueue);
        });
    } 

    clearAll(){
        this.clearForms();
        this.clearQueu();
        this.clearSettings();
    }

    errorHandler(error){
        console.error("Error: "+error);
    }
}