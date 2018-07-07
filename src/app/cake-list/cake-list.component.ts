import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { Cake } from '../cake';

@Component({
  selector: 'cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {
  cakes: Cake[] = [];

  constructor(private service: CakeService) { }

  ngOnInit() {
    this.service.all()
      .subscribe(cakes => this.cakes = cakes);
  }
}
