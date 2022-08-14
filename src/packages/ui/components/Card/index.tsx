import { CSS_ROOT } from '../../utils/constants';
import './style.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = ({ children, className = '', ...rest }: Props): JSX.Element => {
  return (
    <div className={`${CSS_ROOT} card ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
