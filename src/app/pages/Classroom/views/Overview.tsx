import { useEffect } from 'react';

import { useClassroomControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { Loading } from '@reactoso-ui';
import { useSelector } from '@service';

import Desktop from '../components/Desktop';

export default function Overview(): JSX.Element {
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectLoading },
      },
    },
  } = useClassroomControllerScope();

  useEffect(() => {
    methods.onLoadSubjects();
  }, []);

  const isLoading = useSelector((s) => selectLoading(s, `${AppsScope.ClassroomSubject}`)) || false;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="view">
      <Desktop />
    </div>
  );
}
