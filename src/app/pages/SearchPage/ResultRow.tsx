import { Link } from 'react-router-dom';

import Subtitle from '@components/Subtitle';
import { useTranslation } from '@translations';

export default function ResultRow({ title, link, description }) {
  const t = useTranslation();
  return (
    <div className="result-row">
      <Link to={link}>
        <Subtitle>{t(title)}</Subtitle>
      </Link>
      <Subtitle className="paragraph">{t(description)}</Subtitle>
    </div>
  );
}
