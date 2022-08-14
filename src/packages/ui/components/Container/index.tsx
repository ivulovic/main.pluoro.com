import { CSS_ROOT } from '../../utils/constants';

import './style.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  direction?: 'row' | 'column';
}

const Container = ({ children, size = 'md', direction = 'row', className = '', ...rest }: Props): JSX.Element => {
  return (
    <div className={`${CSS_ROOT} container ${size} ${direction} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
