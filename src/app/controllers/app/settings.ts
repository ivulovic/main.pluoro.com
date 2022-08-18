export const enum AppsScope {
  Wishlist = 'wishlist',
  NotesDirectory = 'notes/directories',
  Notes = 'notes/notes',
  ClassroomSubject = 'classroom/subjects',
  ClassroomTopic = 'classroom/topics',
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
  [AppsScope.ClassroomSubject]: {
    id: AppsScope.ClassroomSubject,
  },
  [AppsScope.ClassroomTopic]: {
    id: AppsScope.ClassroomTopic,
  },
};

export default settings;
