import './style.scss';

export default function Subtitle({ children, className = '' }) {
  return <p className={`subtitle ${className}`}>{children}</p>;
}
