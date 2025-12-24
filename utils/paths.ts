export const assetUrl = (path: string) => {
  const base = (import.meta as any)?.env?.BASE_URL ?? '/';
  const normalized = path.replace(/^\//, '');
  return `${base}${encodeURI(normalized)}`;
};
