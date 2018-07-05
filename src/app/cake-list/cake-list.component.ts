import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {
  cakes: Array<any> = [];

  constructor(private service: CakeService) { }

  ngOnInit() {
    this.service.all()
      .subscribe(response => {
        this.cakes = response.json()
      })
  }
}
