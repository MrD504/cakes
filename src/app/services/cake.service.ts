import { Injectable } from '@angular/core';
import { Cake } from '../cake';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private url = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api'

  constructor(private http: Http) { }

  all() {
    return this.http.get(this.url)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  get(id) { 
    return this.http.get(this.url + '/' + id)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  save(resource) {
    if (resource.id) {
      return this.update(resource)
    }
    else {
      return this.create(resource)
    }
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      )
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));
  
    if (error.status === 404)
      return throwError(new NotFoundError());
    
    return throwError(new AppError(error));
  }
}
