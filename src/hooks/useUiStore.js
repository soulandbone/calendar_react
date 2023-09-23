import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store';
import { isDate } from 'date-fns';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
    isDateModalOpen ? openDateModal() : closeDateModal();
  };

  return {
    //*Properties
    isDateModalOpen,
    //*Methods
    openDateModal,
    closeDateModal,
    toggleDateModal, //Solo como idea, no necesariamente lo vamos a utilizar
  };
};
