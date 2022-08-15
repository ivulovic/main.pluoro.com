import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { useNotesControllerScope } from '@controllers/app';
import { Input } from '@reactoso-ui';
import { FormattedMessage } from '@translations';

export default function CreateDirectory(): JSX.Element {
  const { methods } = useNotesControllerScope();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = (e): void => {
    e.preventDefault();
    if (name?.trim()) {
      methods.onCreateDirectory({ name: name.trim() });
    }
    navigate('/notes');
  };
  return (
    <div className="view">
      <form onSubmit={handleSubmit}>
        <h4>
          <FormattedMessage id="directory" />
        </h4>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
}
