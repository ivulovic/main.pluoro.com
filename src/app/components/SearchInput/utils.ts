import db from '@utils/search/db';
import fuzzy from '@utils/search/fuzzy';

const searchByTitle = fuzzy(db, 'title');

export { searchByTitle };
