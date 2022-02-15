import {Entity, model, property, belongsTo} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';


@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  @property({
    type: 'string',
    required: true,
  })
  desc: string;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
  todoList?: TodoListWithRelations;

}

export type TodoWithRelations = Todo & TodoRelations;
