export const assetUrl = (path: string): string => {
  // Always use /bodhi/ as the base path for GitHub Pages
  const basePath = '/bodhi/';
  // Clean the path - remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Encode each path segment separately to handle spaces properly
  const segments = cleanPath.split('/');
  const encodedSegments = segments.map(segment => 
    encodeURIComponent(segment).replace(/%20/g, '%20') // Keep %20 for spaces
  );
  return basePath + encodedSegments.join('/');
};
