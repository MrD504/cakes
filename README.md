# Waracle Cakes

## Development server

Run `docker-compose up --build` for a dev server. Navigate to `http://localhost:4200/`

## Running unit tests

Run `docker-compose run cakes-web ng test`

## Running end-to-end tests

Run `docker-compose run cakes-web ng e2e`

## To build and deploy to Git Pages
The deployed application cannot be used as the server endpoint is unsecure, it is deployed however so that it can be analysed by
Lighthouse in Google Chrome dev tools, to confirm it is a PWA.
```
ng build --prod  --base-href="/cakes/"
ngh --dir dist/cakes-web
```
