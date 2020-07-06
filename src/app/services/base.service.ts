import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  getLocalData(key: string): string | null {
    return localStorage.getItem(key);
  }

  setLocalData(key: string, value: any): void {
    if (typeof (value) !== 'string') {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }
    localStorage.setItem(key, value);
  }

}
