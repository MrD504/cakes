import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../services/cake.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cake-edit',
  templateUrl: './cake-edit.component.html',
  styleUrls: ['./cake-edit.component.css']
})
export class CakeEditComponent implements OnInit {
  cake: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CakeService) { }

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.service.get(id).subscribe((cake: any) => {
          if (cake) {
            this.cake = cake;
          } else {
            this.gotoList();
          }
        });
      }
  }

  gotoList() {
    this.router.navigate(['/cakes']);
  }

  save(form: NgForm) {
    this.service.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.service.delete(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
