import { DEFAULT_LANGUAGE } from '@/config/site';

export const getLocaleContent = (dictionary, language) => {
  if (!dictionary) {
    return {};
  }
  return dictionary[language] ?? dictionary[DEFAULT_LANGUAGE] ?? Object.values(dictionary)[0] ?? {};
};

export const getLocaleString = (value, language) => {
  if (typeof value === 'string') {
    return value;
  }
  if (!value) {
    return '';
  }
  return value[language] ?? value[DEFAULT_LANGUAGE] ?? Object.values(value)[0] ?? '';
};
