import { useEffect, useRef, useState } from 'react';
import { InteractionBar } from '../../molecules/InteractionBar';
import { TodoCard } from '../../molecules/TodoCard';
import './TodoList.css';
import { LoadingCardTemplate } from '../../molecules/LoadingCardTemplate';

const TodoList = ({
   searchedTodos,
   searchValue,
   setSearchValue,
   todos,
   setTodos,
   addTodoValue,
   setAddTodoValue,
   saveAllTodos,
   addATodo,
   loading,
   error,
}) => {
   const listRef = useRef(null);
   const [isAtBottom, setIsAtBottom] = useState(false);
   const [isAtTop, setIsAtTop] = useState(false);
   const [isMiddle, setIsMiddle] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const listElement = listRef.current;
         if (!listElement) return;

         const scrollTop = listElement.scrollTop;
         const scrollHeight = listElement.scrollHeight;
         const clientHeight = listElement.clientHeight;

         const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
         const atTop = scrollTop <= 0;
         const middle = !atTop && !atBottom;

         setIsAtBottom(atBottom);
         setIsAtTop(atTop);
         setIsMiddle(middle);
         console.log(scrollTop);
      };

      const listElement = listRef.current;
      if (listElement) {
         listElement.addEventListener('scroll', handleScroll);
         handleScroll();
      }

      return () => {
         if (listElement) {
            listElement.removeEventListener('scroll', handleScroll);
         }
      };
   }, [searchValue]);

   let maskStyle = isMiddle
      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)'
      : isAtTop && isAtBottom
      ? 'none'
      : isAtBottom
      ? 'linear-gradient(to top, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)'
      : 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)';

   return (
      <div className="lists">
         <InteractionBar
            placeholder="Search..."
            type="search"
            value={searchValue}
            setValue={setSearchValue}
         />
         <div
            className="lists__items"
            ref={listRef}
            style={{
               maskImage: maskStyle,
               WebkitMaskImage: maskStyle,
            }}
         >
            {loading && <LoadingCardTemplate />}
            {error && <p>There was an error loading your data: {error}</p>}

            {!todos.length ? (
               <p className="no-todos">Create your first task!</p>
            ) : !searchedTodos.length ? (
               <p className="no-todos no-results">
                  No results found. Try a different search term.
               </p>
            ) : (
               !loading &&
               searchedTodos.map((todo) => (
                  <TodoCard
                     key={todo.text}
                     checked={todo.checked}
                     text={todo.text}
                     todos={todos}
                     setTodos={setTodos}
                     addTodoValue={addTodoValue}
                     saveAllTodos={saveAllTodos}
                  >
                     {todo.text}
                  </TodoCard>
               ))
            )}
         </div>
         <InteractionBar
            placeholder="Add a Task"
            type="create"
            className="lists__add"
            value={addTodoValue}
            setValue={setAddTodoValue}
            addATodo={addATodo}
         />
      </div>
   );
};

export { TodoList };
