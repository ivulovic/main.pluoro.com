export const enum AppsScope {
  Wishlist = 'wishlist',
  NotesDirectory = 'notes/directories',
  Notes = 'notes/notes',
}

export const settings = {
  [AppsScope.Wishlist]: {
    id: AppsScope.Wishlist,
  },
  [AppsScope.NotesDirectory]: {
    id: AppsScope.NotesDirectory,
  },
  [AppsScope.Notes]: {
    id: AppsScope.Notes,
  },
};

export default settings;
