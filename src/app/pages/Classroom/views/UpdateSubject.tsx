import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useClassroomControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { Button, Input } from '@reactoso-ui';
import { useSelector } from '@service';
import { FormattedMessage, useTranslation } from '@translations';

export default function UpdateSubject(): JSX.Element {
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectData },
      },
    },
  } = useClassroomControllerScope();
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [model, setModel] = useState();
  const [name, setName] = useState('');
  const t = useTranslation();

  const subjects = useSelector((s) => selectData(s, AppsScope.ClassroomSubject));

  useEffect(() => {
    methods.onLoadSubjects();
  }, []);

  useEffect(() => {
    if (subjects) {
      const model = subjects.find((x) => x._id === subjectId);
      setModel(model);
    }
  }, [subjectId, subjects]);

  const handleSubmit = (e): void => {
    e.preventDefault();
    methods.onUpdateSubject({ id: subjectId, name: name.trim() });
    navigate('/classroom');
  };
  return (
    <div className="form">
      <div>
        <h4>
          <FormattedMessage id="subjectName" />
        </h4>
        <Input value={name || model?.name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button kind="ghost" onClick={handleSubmit}>
        {t('save')}
      </Button>
    </div>
  );
}
