import { useGlobalContext } from '../../store/context';
const ToggleBtn = () => {
  const { isOpen } = useGlobalContext();
  return (
    <div className="menu-btn">
      <span className={`menu-toggle ${isOpen && 'open'}`}></span>
    </div>
  );
};

export default ToggleBtn;
