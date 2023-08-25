import { Injectable } from '@angular/core'
import { LocalStorageKey } from '@app/core'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public setItem(key: LocalStorageKey, value: string): void {
    localStorage.setItem(key, value)
  }

  public getItem(key: LocalStorageKey): string | null {
    return localStorage.getItem(key)
  }

  public removeItem(key: LocalStorageKey): void {
    localStorage.removeItem(key)
  }

  public clear(): void {
    localStorage.clear()
  }
}
