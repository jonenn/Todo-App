import { H3 } from '../../atoms/H3';

const TodoCounter = ({ completed, total }) => {
   const phrase =
      completed === total
         ? 'You’ve nailed it!'
         : completed > total - 3
         ? 'Almost there!'
         : completed > total / 2
         ? 'You’re on the right track!'
         : completed === 0
         ? 'Starting is the first step to success'
         : 'Keep going, you’ve got this!';
   return (
      <H3>
         {phrase} {completed > 0 ? ` ${completed} out of ${total}` : ''}
      </H3>
   );
};

export { TodoCounter };