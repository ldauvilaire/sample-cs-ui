# sample-cs-ui

Sample Angular Project with Style Guide and NgRx and Material

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

$ npm install --save @angular/material
$ npm install --save @angular/cdk
$ npm install --save @angular/animations
$ npm install --save hammerjs

```ts
// in main.ts

import 'hammerjs';
```

### Font Awesome Integration

$ npm install --save font-awesome

```json
// in .angular-cli.json

"styles": [
  "styles.css",
  "../node_modules/font-awesome/css/font-awesome.min.css"
]
```

### PrimeNG Integration

$ npm install primeng --save

```json
"styles": [
  "styles.css",
  "../node_modules/font-awesome/css/font-awesome.min.css",
  "../node_modules/primeng/resources/themes/omega/theme.css",
  "../node_modules/primeng/resources/primeng.min.css"
]
```

### NgRX Integration

$ npm install @ngrx/store --save
$ npm install @ngrx/effects --save
$ npm install @ngrx/store-devtools --save
$ npm install @ngrx/router-store --save
$ npm install ngrx-store-freeze --save

### NgX-Datatable Integration

$ npm install @swimlane/ngx-datatable --save

### Moment.js Integration

$ npm install moment --save

### ngx-logger Integration

$ npm install ngx-logger --save
