import { ButtonContainer } from './button.css';

const Button = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}) => {
  return (
    <button className={`${className && className} ${ButtonContainer}`} onClick={onClick && onClick} type="button">
      {children && children}
    </button>
  );
};
export default Button;
