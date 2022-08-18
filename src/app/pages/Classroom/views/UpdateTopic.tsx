import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useClassroomControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { Button, Input } from '@reactoso-ui';
import { useSelector } from '@service';
import { FormattedMessage, useTranslation } from '@translations';

export default function UpdateTopic(): JSX.Element {
  const { subjectId, topicId } = useParams();
  const [values, setValues] = useState({ name: '', link: '' });
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectData },
      },
    },
  } = useClassroomControllerScope();
  const t = useTranslation();

  const topics = useSelector((s) => selectData(s, AppsScope.ClassroomTopic)) || [];
  const handleValuesChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  useEffect(() => {
    const topic = topics?.find((x) => x._id === topicId);
    if (topic) {
      setValues(topic);
    }
  }, [topics]);

  useEffect(() => {
    methods.onLoadTopic({ id: topicId });
  }, [topicId]);

  const handleSubmit = (e) => {
    if (values.name?.trim() && values.link?.trim()) {
      methods.onUpdateTopic({
        id: topicId,
        name: values.name.trim(),
        link: values.link.trim(),
        subject: subjectId,
      });
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
      <Button kind="ghost" onClick={handleSubmit}>{t('save')}</Button>
    </div>
  );
}
