import { useNotesController } from '@controllers/app';
import Context from '@controllers/app/context';

import Page from './page';
import './style.scss';

export default function NotesPage(): JSX.Element {
  const controller = useNotesController();
  return (
    <Context.Provider value={controller}>
      <Page />
    </Context.Provider>
  );
}
