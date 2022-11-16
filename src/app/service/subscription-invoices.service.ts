import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionInvoicesService {

  constructor(private http: HttpClient) {
  }

  getSubscriptionInvoices(){
    const subscriptionInvoices = "http://localhost:3000/api/v1/tukatech/subscription_invoices.json";
    return this.http.get(subscriptionInvoices, {responseType: 'json'})
  }
}
