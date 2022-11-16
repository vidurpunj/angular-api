import { Component, OnInit } from '@angular/core';
import { SubscriptionInvoice } from './SubscriptionInvoice';
import { SubscriptionInvoicesService } from 'src/app/service/subscription-invoices.service';

@Component({
  selector: 'app-subscription-invoices',
  templateUrl: './subscription-invoices.component.html',
  styleUrls: ['./subscription-invoices.component.css']
})
export class SubscriptionInvoicesComponent implements OnInit {
  title = "Subscription Invoices"
  subscptionServices : any = []

  constructor(private subscriptionInvoiceService: SubscriptionInvoicesService) {
    this.subscriptionInvoiceService.getSubscriptionInvoices().subscribe(data => {
      this.subscptionServices = data;
    })
   }

  ngOnInit(): void {
  }

}
