import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  public getPaymentStatus(status: boolean): String {
    if (status) return 'Opłacono';
    return 'Nie opłacono';
  }
}
