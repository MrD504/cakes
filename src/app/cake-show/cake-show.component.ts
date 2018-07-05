import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cake } from '../cake';
import { CakeService } from '../services/cake.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cake-show',
  templateUrl: './cake-show.component.html',
  styleUrls: ['./cake-show.component.css']
})
export class CakeShowComponent implements OnInit {
  cake: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CakeService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.get(id).subscribe((cake: any) => {
          if (cake) {
            this.cake = new Cake(cake);
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/cakes']);
  }
}