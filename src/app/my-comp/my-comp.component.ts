import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-comp',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './my-comp.component.html',
  styleUrl: './my-comp.component.css'
})
export class MyCompComponent {
name= "Sergey";
text = [
  "Калининград — самый западный административный центр России.",
  "Калининградская область не имеет общих границ с другими регионами РФ,", 
  "а граничит только с Польшей и Литвой.",
  "Калинингра́д — город в России, административный центр Калининградской области,",
   "До 4 июля 1946 года город носил название Кёнигсбе́рг (нем. Königsberg)"
];
people = 489_584;
chenge: boolean = true;
toChenge() {
  this.chenge = !this.chenge;
}
}
