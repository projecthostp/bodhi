export const assetUrl = (path: string): string => {
  // Get the base URL, fallback to '/'
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Use encodeURI to handle spaces and special characters
  const encoded = encodeURI(cleanPath);
  // Combine base + encoded path
  return `${base}${encoded}`;
};
