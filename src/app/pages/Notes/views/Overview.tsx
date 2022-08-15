import { useEffect } from 'react';

import { useNotesControllerScope } from '@controllers/app';

import List from '../components/Form';

export default function Overview(): JSX.Element {
  const { methods } = useNotesControllerScope();

  useEffect(() => {
    methods.onLoadDirectories();
  }, []);

  return (
    <div className="view">
      <List />
    </div>
  );
}
