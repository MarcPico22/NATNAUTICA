import { getLanguageSwitchPath } from './routes';

export const languageChangedPlugin = {
  type: 'languageChanged',
  init: function(instance) {
    instance.on('languageChanged', (lng) => {
      const currentPath = window.location.pathname;
      if (currentPath !== '/') {
        const newPath = getLanguageSwitchPath(lng, currentPath);
        window.history.replaceState(null, '', newPath);
      }
    });
  }
};