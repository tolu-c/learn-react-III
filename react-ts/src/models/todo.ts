export default class Todo {
  id: string;
  title: string;

  constructor(todoTitle: string) {
    this.title = todoTitle;
    this.id = new Date().toISOString();
  }
}
