export const cn = (...values) =>
  values
    .flatMap((value) => {
      if (!value) {
        return [];
      }
      if (typeof value === 'string') {
        return value.trim();
      }
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === 'object') {
        return Object.entries(value)
          .filter(([, condition]) => Boolean(condition))
          .map(([key]) => key);
      }
      return String(value);
    })
    .filter(Boolean)
    .join(' ');
