import ReactDOM from 'react-dom';
import './Modal.css';
import { MOverlay } from '../../../atoms/Modal/MOverlay';
import { MContent } from '../../../atoms/Modal/MContent';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../../../features/modal/modalSlice';
import { useEffect } from 'react';

const ModalContainer = ({ children }) => {
   const isOpen = useSelector((state) => {
      return state.modal.isOpen;
   });
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(toggleModal({ open: !isOpen }));
      console.log(isOpen);
   };

   const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
         dispatch(toggleModal({ open: false }));
      }
   };

   useEffect(() => {
      if (isOpen) {
         window.addEventListener('keydown', handleKeyDown);
      }
   }, [isOpen]);

   return ReactDOM.createPortal(
      <div className="modal__container">
         <MOverlay onClick={handleClick} />
         <MContent>{children}</MContent>
      </div>,
      document.getElementById('modal')
   );
};

export { ModalContainer };
