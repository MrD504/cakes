# Waracle Cakes
PWA for managing Waracle's cakes.

## Development server

### Using Docker (Compose)
```
docker-compose up --build
```
Navigate to `http://localhost:4200/`

### Directly
```
npm install
npm install -g @angular/cli@1.7.1
ng serve
```
Navigate to `http://localhost:4200/`

## Running unit tests
Ran only outside of Docker (so must install dependencies)

### Unit tests
```
ng test
```

### E2E tests
```
ng e2e
```

## PWA score
This app is deployed to Githup pages, so that you can test it in Chrome lighthouse to get its
*score as a PWA*.

It wont run and looses a few points as the server endpoint isn't over _https_
It can be found [here](https://paulcockrell.github.io/cakes/cakes)