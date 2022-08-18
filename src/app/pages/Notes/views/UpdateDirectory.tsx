import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useNotesControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { Button, Input } from '@reactoso-ui';
import { useSelector } from '@service';
import { FormattedMessage } from '@translations';

export default function UpdateDirectory(): JSX.Element {
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectData },
      },
    },
  } = useNotesControllerScope();
  const navigate = useNavigate();
  const { directoryId } = useParams();
  const [model, setModel] = useState();
  const [name, setName] = useState('');

  const directories = useSelector((s) => selectData(s, AppsScope.NotesDirectory));

  useEffect(() => {
    if (directories) {
      const model = directories.find((x) => x._id === directoryId);
      setModel(model);
    }
  }, [directoryId, directories]);

  const handleSubmit = (e): void => {
    e.preventDefault();
    methods.onUpdateDirectory({ id: directoryId, name: name.trim() });
    navigate('/notes');
  };
  return (
    <div className="view">
      <div>
        <h4>
          <FormattedMessage id="directory" />
        </h4>
        <Input value={name || model?.name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button kind="ghost" onClick={handleSubmit}>Save</Button>
    </div>
  );
}
