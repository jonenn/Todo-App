import { Icon } from '../Icon';

const Delete = ({ onDelete, text }) => {
   const handleClick = () => {
      onDelete(text);
   };
   return (
      <div
         className="todo-card__icon todo-card__icon--delete"
         onClick={() => handleClick()}
      >
         <Icon type="delete" />
      </div>
   );
};

export { Delete };
