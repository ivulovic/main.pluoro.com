import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useNotesControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { useSelector } from '@service';

import Editor from '../components/Editor';
import Form from '../components/Form';

export default function UpdateNote(): JSX.Element {
  const { directoryId, noteId } = useParams();
  const [model, setModel] = useState();
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectData },
      },
    },
  } = useNotesControllerScope();

  const notes = useSelector((s) => selectData(s, AppsScope.Notes)) || [];

  useEffect(() => {
    setModel(notes?.find((x) => x._id === noteId));
  }, [notes]);

  useEffect(() => {
    methods.onLoadNote({ id: noteId });
  }, [noteId]);

  useEffect(() => {
    methods.onLoadDirectories();
  }, [model]);

  const onSubmit = (values) => {
    methods.onUpdateNote({
      ...values,
      id: noteId,
      directory: directoryId,
    });
  };
  return (
    <div className="view">
      <Form />
      <Editor onSubmit={onSubmit} model={model} />
    </div>
  );
}
