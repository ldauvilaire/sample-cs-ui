# sample-cs-ui

Sample Angular Project with Style Guide and NgRx and Material

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Backend is accesses with prefix `/api`.
You can alse Run `ng serve --proxy-config proxy.conf.json`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

### Angular Material Integration

```shell script
$ npm install --save @angular/material
$ npm install --save @angular/cdk
$ npm install --save @angular/animations
$ npm install --save hammerjs
```

```ts
// in main.ts

import 'hammerjs';
```

### Font Awesome Integration

```shell script
$ npm install --save font-awesome
```

```json
// in .angular-cli.json

"styles": [
  "styles.css",
  "../node_modules/font-awesome/css/font-awesome.min.css"
]
```

### PrimeNG Integration

```shell script
$ npm install primeng --save
```

```json
"styles": [
  "styles.css",
  "../node_modules/font-awesome/css/font-awesome.min.css",
  "../node_modules/primeng/resources/themes/omega/theme.css",
  "../node_modules/primeng/resources/primeng.min.css"
]
```

### NgRX Integration

```shell script
$ npm install @ngrx/store --save
$ npm install @ngrx/effects --save
$ npm install @ngrx/store-devtools --save
$ npm install @ngrx/router-store --save
```

### NgX-Datatable Integration

```shell script
$ npm install @swimlane/ngx-datatable --save
```

### Moment.js Integration

```shell script
$ npm install moment --save
```

### ngx-logger Integration

```shell script
$ npm install ngx-logger --save
```

### proxy Integration

Backend is accesses with prefix /api.
To serve the application,
   just run ````npm start````
   or ```ng serve --proxy-config proxy.conf.json```
