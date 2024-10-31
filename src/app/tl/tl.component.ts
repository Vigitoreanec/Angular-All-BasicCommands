import { Component, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tl-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tl.html',
  styleUrl: './tl.css',
})
export class MyCompTL {
  angular = 'Angular ' + VERSION.full;
  text = '-test-';
  condition: boolean = true;
  toggleCondition() {
    this.condition = !this.condition;
  }
  state = true;
  toggleState() {
    this.state = !this.state;
  }
  items = ['Bob', 'Jon', 'Nesh', 'Inna'];
  toDay = new Date();
  pi = Math.PI;
}
