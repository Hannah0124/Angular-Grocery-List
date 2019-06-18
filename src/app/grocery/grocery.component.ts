import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
  // styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class GroceryComponent implements OnInit {
  // Define <task> variable. 
  task: string;

  // Add <tasks> to keep a collection of tasks entered.
  tasks = [];

  constructor() { }

  ngOnInit() {
  }

  // Create <onClick> function.
  onClick() {
    this.tasks.push({name: this.task});
    this.task = '';
  }

}
