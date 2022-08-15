import { Outlet } from 'react-router-dom';

import './style.scss';

export default function Page(): JSX.Element {
  return (
    <div className="page-wrapper notes-container">
      <Outlet />
    </div>
  );
}
