export const getBrandIcon = (name: string): string => {
  switch (name) {
    case 'twitter':
      return 'icon brands fa-twitter';
    case 'instagram':
      return 'icon brands fa-instagram';
    case 'facebook':
      return 'icon brands fa-facebook';
    case 'github':
      return 'icon brands fab fa-github';
    case 'tumblr':
      return 'icon brands fa-tumblr';
    case 'patreon':
      return 'icon brands fab fa-patreon';
    case 'quora':
      return 'icon brands fab fa-quora';
    case 'website':
      return 'icon fas fa-compass';
    default:
      throw new Error('Invalid type');
  }
};
