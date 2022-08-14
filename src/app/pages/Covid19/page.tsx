import { Outlet } from 'react-router';
import './style.scss';

export default function Page() {
  return (
    <div className="page-wrapper covid-page">
      <Outlet />
    </div>
  );
}
