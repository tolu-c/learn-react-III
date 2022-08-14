import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ title: string }> = ({ title }) => {
  return <li className={classes.item}>{title}</li>;
};

export default TodoItem;
