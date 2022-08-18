import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useClassroomControllerScope } from '@controllers/app';
import { Button, Input } from '@reactoso-ui';
import { FormattedMessage, useTranslation } from '@translations';

export default function CreateSubject(): JSX.Element {
  const { methods } = useClassroomControllerScope();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const t = useTranslation();

  const handleSubmit = (e): void => {
    e.preventDefault();
    if (name?.trim()) {
      methods.onCreateSubject({ name: name.trim() });
    }
    navigate('/classroom');
  };
  return (
    <div className="form">
      <div>
        <h4>
          <FormattedMessage id="subjectName" />
        </h4>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button kind="ghost" onClick={handleSubmit}>
        {t('save')}
      </Button>
    </div>
  );
}
