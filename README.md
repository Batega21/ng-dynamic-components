# A simple Dynamic Components app

The following example shows how to build a dynamic component application.

The hero agency is planning an ad campaign with several different ads cycling through the banner. New ad components are added frequently by several different teams. This makes it impractical to use a template with a static component structure.

Instead, you need a way to load a new component without a fixed reference to the component in the ad banner's template.

Angular comes with its own API for loading components dynamically.

## Loading components

Most of the ad banner implementation is in ad-banner.component.ts. To keep things simple in this example, the HTML is in the @Component decorator's template property as a template string.

The `<ng-template>` element is where you apply the directive you just made. To apply the AdDirective, recall the selector from ad.directive.ts, `[dcWrapper]`. Apply that to `<ng-template>` without the square brackets. Now Angular knows where to dynamically load components.

### dynamic-wrapper.component.ts (template)

```typescript
template: `
  <div style="display: grid; place-items: center; margin: 10rem;">
  <h1 style="margin-bottom: 3rem;">Loaded Components Dynamically</h1>
  <div style="display: flex; gap: 20px; margin-bottom: 3rem;">
    <div *ngFor="let component of dynamicComponents">
      <button mat-fab extended color="primary" (click)="loadComponent(component)">
        <mat-icon>favorite</mat-icon>
        {{ component?.data?.name }}
      </button>
    </div>
  </div>
  <ng-template dcWrapper></ng-template>
</div>
`
```

## Resolving components

Take a closer look at the methods in ad-banner.component.ts.

`DynamicWrapperComponent` takes an array of `dynamicComponents` objects as input, which ultimately comes from `DcService`. `DynamicComponents` objects specify the type of component to load and any data to bind to the component.`DcService` returns the actual ads making up the ad campaign.

Passing an array of components to `DynamicWrapperComponent` allows for a dynamic list of ads without static elements in the template.

### dynamic-wrapper.component.ts

```typescript
export class DynamicWrapperComponent {
  @Input() dynamicComponents: DynamicItem[] = [];
  @ViewChild(DcDirective) dcWrapper!: DcDirective;

  public loadComponent(item: DynamicItem) {
    const viewContainerRef = this.dcWrapper.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(
      item.component
    );
    componentRef.instance.data = item.data;
  }
}
```

With its getDynamicComponents() method, `AppComponent` cycles through the array of `DynamicComponents` and loads a new component every click event by calling `loadComponent()`.

### app.component.ts

```typescript
export class AppComponent {
  title = 'dynamicComponents';
  dynamicService = inject(DcService);
  components = this.dynamicService.getDynamicComponents();
}
```

Next, you're targeting the viewContainerRef that exists on this specific instance of the component. How do you know it's this specific instance? Because it's referring to adHost, and adHost is the directive you set up earlier to tell Angular where to insert dynamic components.

As you may recall, AdDirective injects ViewContainerRef into its constructor. This is how the directive accesses the element that you want to use to host the dynamic component.

To add the component to the template, you call createComponent() on ViewContainerRef.

The createComponent() method returns a reference to the loaded component. Use that reference to interact with the component by assigning to its properties or calling its methods.

## Dynamic Service

The `DcService` creates and returns and array of `DynamicComponents`, creating a new instance of DynamicComponent interface:

```typescript
export class DcService {
  public getDynamicComponents() {
    const components = [
      new DynamicItem(RustComponent, { name: 'Rust', description: 'Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.' }),
      new DynamicItem(PythonComponent, { name: 'Python', description: 'Python is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.' }),
      new DynamicItem(JavascriptComponent, { name: 'Javascript', description: 'Javascript is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.' }),
    ];
    return components;
  }
}
```

## Dynamic Component interface

In the ad banner, all components implement a common `DynamicComponent` interface to standardize the API for passing data to the components.

Here are two sample components and the `DynamicComponent` interface for reference:

```typescript
export interface DynamicComponent {
  data: any;
}
```

## Angular's general documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
