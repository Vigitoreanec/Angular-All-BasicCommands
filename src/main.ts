import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyCompComponent } from './app/my-comp/my-comp.component.js';
import { MyCompTL } from './app/tl/tl.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyCompComponent, MyCompTL],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://github.com/Vigitoreanec">
      Learn more about Me
    </a>
    <app-my-comp/>
      <div>
        <tl-comp/>
      </div>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
