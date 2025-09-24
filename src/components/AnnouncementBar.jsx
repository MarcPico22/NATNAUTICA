import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const AnnouncementBar = () => {
  const { t } = useTranslation();
  const items = t('announcement.items', { returnObjects: true });

  return (
    <header className="announcement-bar">
      <div className="container">
        {items.map((item, index) => (
          <Fragment key={`${item}-${index}`}>
            <span>{item}</span>
            {index < items.length - 1 ? (
              <span aria-hidden="true" className="separator">
                •
              </span>
            ) : null}
          </Fragment>
        ))}
      </div>
    </header>
  );
};

export default AnnouncementBar;
