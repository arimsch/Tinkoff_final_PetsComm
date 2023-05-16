import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}

  public set<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public get<T>(key: string): T | null {
    const existInStorage = localStorage.getItem(key);
    if (existInStorage) {
      return JSON.parse(existInStorage);
    }
    return null;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
