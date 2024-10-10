import { useSelector } from 'react-redux';
import { NavBtn } from '../../molecules/NavBtn';
import './Nav.css';

const Nav = () => {
   const { defaultCategories: lists, index: chosenIndex } = useSelector(
      (state) => {
         return state.nav;
      }
   );

   return (
      <>
         {lists.map((nav, index) => {
            return (
               <NavBtn key={index} id={index} chosenIndex={chosenIndex}>
                  {nav.title}
               </NavBtn>
            );
         })}
      </>
   );
};
export { Nav };
