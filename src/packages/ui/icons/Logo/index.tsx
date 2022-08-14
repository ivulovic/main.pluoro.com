import image from './logo.png';
import './style.scss';

const Logo = ({ className = '' }): JSX.Element => (
  <div className={`reactoso logo ${className}`} style={{ backgroundImage: `url(${image})` }} />
);

export default Logo;
