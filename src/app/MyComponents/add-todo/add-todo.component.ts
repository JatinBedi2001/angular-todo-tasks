import { Component, EventEmitter, Output  } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string | undefined;
  desc: string | undefined;
  isDisabled = true;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  OnSubmit() {
    const todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
    this.clearFields();
    this.isDisabled = true; // disable the button until the user types something in both fields
    if (todo.title && todo.desc) {
      this.todoAdd.emit(todo);
    }
  }

  clearFields() {
    this.title = '';
    this.desc = '';
  }
  updateDisabledState() {
    this.isDisabled = !this.title || !this.desc;
  }
}
