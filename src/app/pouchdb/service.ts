import { Injectable, EventEmitter } from '@angular/core';
import * as fs from "fs";
import {Item} from '../item/item.service';
import {environment} from '../../environments/environment';

import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb-adapter-memory'));

@Injectable()
export class PouchDBService {

    private isInstantiated: boolean;
    private database: any;
    private listener: EventEmitter<any> = new EventEmitter();

    private data_source: string = environment.DatabaseFile;

    public constructor() {

        if(!this.isInstantiated) {
            // this.database = new PouchDB('dbname');
            this.database = new PouchDB('dbname', {adapter: 'memory'});

            this.database.changes({
                live: true,
                include_docs: true
            }).on('change', change => {
                this.listener.emit(change);
            });

            this.isInstantiated = true;
        }

        this.database.import_json(this.data_source).then(function (result){
            console.log(result);
        }).catch(function (err){
            console.log(err);
        });

        this.database.info().then(function (result) {
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });
    }

    destroy(){
      return new Promise((resolve, reject) => {
        try {
          this.database.destroy();
          resolve('DB successfully distroyed');
        } catch (e) {
          reject(e);
        }
        }
      );
    }

    public fetch() {
        return this.database.allDocs({include_docs: true});
    }

    public import_json(filename: string): Promise<void> {
      const items: Item[] = JSON.parse(fs.readFileSync(filename, 'utf8'));
      return this.database.bulkDocs(items);
    }

    public get(id: string) {
        return this.database.get(id);
    }

    public put(id: string, document: any) {
        document._id = id;
        return this.get(id).then(result => {
            document._rev = result._rev;
            return this.database.put(document);
        }, error => {
            if(error.status == "404") {
                return this.database.put(document);
            } else {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        });
    }

    // public sync(remote: string) {
    //     let remoteDatabase = new PouchDB(remote);
    //     this.database.sync(remoteDatabase, {
    //         live: true
    //     }).on('change', change => {
    //         this.listener.emit(change);
    //     }).on('error', error => {
    //         console.error(JSON.stringify(error));
    //     });
    // }

    public getChangeListener() {
        return this.listener;
    }


}
