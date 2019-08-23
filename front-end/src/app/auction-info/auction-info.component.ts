import { Component, OnInit, Input } from '@angular/core';
import { Auction } from '../_models';
import { AuctionService } from '../_services';

@Component({
  selector: 'app-auction-info',
  templateUrl: './auction-info.component.html',
  styleUrls: ['./auction-info.component.css']
})
export class AuctionInfoComponent implements OnInit {
  @Input() auction: Auction;

  constructor(
    private auctionService: AuctionService
  ) { }

  ngOnInit() {
  }

  delete(): void {
    this.auctionService.deleteAuction(this.auction._id).subscribe();
    window.location.reload();
  }

  edit(): void {
    this.auctionService.updateAuction(this.auction).subscribe();
  }

}