import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { useNotesControllerScope } from '@controllers/app';
import { Button, Input } from '@reactoso-ui';
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
      <div>
        <h4>
          <FormattedMessage id="directory" />
        </h4>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button kind="ghost" onClick={handleSubmit}>Save</Button>
    </div>
  );
}
