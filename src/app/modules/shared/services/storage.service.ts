import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from "rxjs";
import { share } from 'rxjs/operators';
import { AccessToken } from '../models/access';


@Injectable()
export class StorageService implements OnDestroy {
  private onSubject = new Subject<{ key: string, value: any }>();
  public changes = this.onSubject.asObservable().pipe(share());

  constructor() {
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  public getStorage() {
    let s = [];
    for (let i = 0; i < localStorage.length; i++) {
      s.push({
        key: localStorage.key(i),
        value: JSON.parse(localStorage.getItem(localStorage.key(i)!!)!!)
      });
    }
    return s;
  }

  public store(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
    // the local application doesn't seem to catch changes to localStorage...
    this.onSubject.next({ key: key, value: data })
  }



  public get(key: string): any {
    if (localStorage.getItem(key) != null) {
      return JSON.parse(localStorage.getItem(key)!!)
    }
    return null
  }


  public clear(key: string) {
    localStorage.removeItem(key);
    // the local application doesn't seem to catch changes to localStorage...
    this.onSubject.next({ key: key, value: null });
  }


  private start(): void {
    window.addEventListener("storage", this.storageEventListener.bind(this));
  }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea == localStorage) {
      let v;
      try {
        v = JSON.parse(event.newValue!!);
      } catch (e) {
        v = event.newValue;
      }
      this.onSubject.next({ key: event.key!!, value: v });
    }
  }

  private stop(): void {
    window.removeEventListener("storage", this.storageEventListener.bind(this));
    this.onSubject.complete();
  }

  public getToken(): AccessToken | null {
    if (localStorage.getItem("accessToken") != null) {
      return this.decodeToken(localStorage.getItem("accessToken")!!) as AccessToken
    }
    return null
  }

  decodeToken(token: string) {
    const _decodeToken = (token: string) => {
      try {
        return JSON.parse(atob(token));
      } catch {
        return;
      }
    };
    return token
      .split('.')
      .map(token => _decodeToken(token))
      .reduce((acc, curr) => {
        if (!!curr) acc = { ...acc, ...curr };
        return acc;
      }, Object.create(null));
  }
}