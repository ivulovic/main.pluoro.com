import { useState, useRef } from 'react';

import useOnClickOutside from '@hooks/useOnClickOutside';
// import useOnOutsideClick from 'hooks/useOnOutsideClick';
import './style.scss';

const noop = () => {};

export default function Icon({ id, title, icon: Icon, onClick = noop, tooltip }) {
  const ref = useRef();

  const [isActive, setIsActive] = useState(false);

  const setInactive = () => setIsActive(false);

  useOnClickOutside(ref, setInactive);

  return (
    <div
      ref={ref}
      onClick={() => setIsActive(true)}
      onDoubleClick={() => onClick(id)}
      className={`icon ${isActive ? 'active' : ''}`}
      style={{ position: 'relative' }}
    >
      <div className="icon-image">
        <Icon width="2rem" height="2rem" />
      </div>

      {tooltip ? <div className="icon-tooltip right">
        <div />
        <p>{tooltip}</p>
      </div> : <></>}

      <div className="icon-title">{title}</div>

      <div className="progres">
        <div style={{ width: '0px' }}></div>
      </div>
    </div>
  );
}
