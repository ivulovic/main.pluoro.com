import { Link, useNavigate, useParams } from 'react-router-dom';

import { useNotesControllerScope } from '@controllers/app';
import { AppsScope } from '@controllers/app/settings';
import { AddIcon, Loading, RemoveIcon, UpdateIcon } from '@reactoso-ui';
import { useSelector } from '@service';
import { FormattedMessage } from '@translations';
import './style.scss';

export default function Form(): JSX.Element {
  const { directoryId, noteId } = useParams();
  const {
    methods,
    implementation: {
      app: {
        selectors: { selectData },
      },
    },
  } = useNotesControllerScope();

  const navigate = useNavigate();
  const directories = useSelector((s) => selectData(s, AppsScope.NotesDirectory));
  const activeDirectory = directories?.find((x) => x._id === directoryId);

  const handleNoteRemove = (e) => methods.onRemoveNote({ id: noteId });
  const handleDirectoryChange = (e) => navigate(`/notes${e.target.value ? `/${e.target.value}` : ''}`);
  const handleDirectoryRemove = (e) => methods.onRemoveDirectory({ id: directoryId });
  const handleNoteChange = (e) => navigate(`/notes/${directoryId}${e.target.value ? `/${e.target.value}` : ''}`);

  if (!directories) {
    return <Loading />;
  }

  return (
    <div className="notes-form">
      <div>
        <h4>
          <FormattedMessage id="directory" />
        </h4>
        <div className="row">
          <select className="select" onChange={handleDirectoryChange} value={directoryId || ''}>
            {directories?.length && (
              <>
                <option value={''}>Select Directory</option>
                {directories.map((x) => (
                  <option key={x._id} value={x._id}>
                    {x.name}
                  </option>
                ))}
              </>
            )}
          </select>
          <div className="controls">
            <Link to="/notes/create-directory">
              <AddIcon />
            </Link>
            <Link to={`/notes`} onClick={handleDirectoryRemove}>
              <RemoveIcon />
            </Link>
            {directoryId && (
              <Link to={`/notes/${directoryId}/update`}>
                <UpdateIcon />
              </Link>
            )}
          </div>
        </div>
        {!directories?.length && (
          <h4>
            <FormattedMessage id="noDirectories" />
          </h4>
        )}
      </div>
      {directoryId && (
        <div>
          <h4>
            <FormattedMessage id="note" />
          </h4>
          <div className="row">
            <select className="select" onChange={handleNoteChange} value={noteId}>
              <option value={''}>Select Note</option>
              {activeDirectory?.notes.map((x) => (
                <option key={x._id} value={x._id}>
                  {x.title}
                </option>
              ))}
            </select>
            <div className="controls">
              <Link to={`/notes/${directoryId}`}>
                <AddIcon />
              </Link>
              {noteId && (
                <Link to={`/notes/${directoryId}`} onClick={handleNoteRemove}>
                  <RemoveIcon />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
