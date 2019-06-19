import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
  // styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class GroceryComponent implements OnInit {
  // Define <task> variable. 
  // task: string;
  task = {
    name: '',
    id: 0
  }

  // Add <tasks> to keep a collection of tasks entered.
  tasks = [];

  constructor() { }

  ngOnInit() {
  }

  // Create <onClick> function.
  // Check for the id to see if it's an existing item or a new item.
  onClick() {
    if (this.task.id === 0) {
      // Assign a unique time stamp as id to each task.
      this.tasks.push({id: (new Date()).getTime(), name: this.task.name, strike: false})
    }

    this.task = {
      name: '',
      id: 0
    }

    // this.tasks.push({name: this.task});
    // this.task = '';
  }

  // Create <onEdit> function.
  onEdit(item) {
    this.task = item;
  }

  // Create <onDelete> function.
  onDelete(item) {
    for(var i = 0; i < this.tasks.length; i++) {
      if (item.id === this.tasks[i].id) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  // Create <onStrike> function.
  onStrike(item) {
    for(var i = 0; i < this.tasks.length; i++) {
      if (item.id === this.tasks[i].id) {
        // Uncheck item from stroke. (When stroke === true)
        if (this.tasks[i].strike) {
          this.tasks[i].strike = false;
        // Check item as stroke.  
        } else {
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }
}
