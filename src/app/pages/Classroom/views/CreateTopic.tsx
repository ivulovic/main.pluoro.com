import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useClassroomControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { Button, Input } from '@reactoso-ui';
import { useSelector } from '@service';
import { FormattedMessage, useTranslation } from '@translations';

export default function CreateTopic(): JSX.Element {
  const { subjectId } = useParams();
  const [values, setValues] = useState({ name: '', link: '' });
  const navigate = useNavigate();
  const t = useTranslation();
  const isListening = useRef(false);
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectData },
      },
    },
  } = useClassroomControllerScope();

  useEffect(() => {
    methods.onLoadSubjects();
    return () => {
      isListening.current = false;
    };
  }, []);

  const handleValuesChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const topics = useSelector((s) => selectData(s, AppsScope.ClassroomTopic));

  useEffect(() => {
    console.log('topics chag', topics, isListening);
    if (topics && isListening.current) {
      navigate(`/classroom`);
    }
  }, [topics]);

  const handleSubmit = (e) => {
    if (values.name?.trim() && values.link?.trim()) {
      methods.onCreateTopic({
        name: values.name.trim(),
        link: values.link.trim(),
        subject: subjectId,
      });
      isListening.current = true;
    }
  };
  return (
    <div className="form">
      <div>
        <h4>
          <FormattedMessage id="topicName" />
        </h4>
        <Input name="name" value={values.name} onChange={handleValuesChange} />
      </div>
      <div>
        <h4>
          <FormattedMessage id="topicLink" />
        </h4>
        <Input name="link" value={values.link} onChange={handleValuesChange} />
      </div>
      <Button kind="ghost" onClick={handleSubmit}>
        {t('save')}
      </Button>
    </div>
  );
}
