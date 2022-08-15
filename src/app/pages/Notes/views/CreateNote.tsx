import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useNotesControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { useSelector } from '@service';

import Editor from '../components/Editor';
import Form from '../components/Form';

export default function CreateNote(): JSX.Element {
  const { directoryId } = useParams();
  const navigate = useNavigate();
  const isListening = useRef(false);
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectData },
      },
    },
  } = useNotesControllerScope();

  useEffect(() => {
    methods.onLoadDirectories();
    return () => {
      isListening.current = false;
    }
  }, []);

  const notes = useSelector((s) => selectData(s, AppsScope.Notes));

  useEffect(() => {
    if (notes && isListening.current) {
      const [note] = notes;
      navigate(`/notes/${directoryId}/${note._id}`);
    }
  }, [notes]);

  const onSubmit = (values) => {
    methods.onCreateNote({
      ...values,
      directory: directoryId,
    });
    isListening.current = true;
  };
  return (
    <div className="view">
      <Form />
      <Editor onSubmit={onSubmit} model={null} />
    </div>
  );
}
