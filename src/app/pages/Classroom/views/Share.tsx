import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useClassroomControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { Loading } from '@reactoso-ui';
import { useSelector } from '@service';

import Desktop from '../components/Desktop';

export default function ClassroomShare(): JSX.Element {
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectLoading },
      },
    },
  } = useClassroomControllerScope();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      methods.onLoadSharedSubjects({ id });
    }
  }, []);

  const isLoading = useSelector((s) => selectLoading(s, `${AppsScope.ClassroomSubject}`)) || false;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="view">
      <Desktop source="share" />
    </div>
  );
}
