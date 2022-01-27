export const isValidUrl = (url: string): boolean => {
  try {
    const urlInstance = new URL(url);
    const validURLProtocols = ['http:', 'https:'];
    return validURLProtocols.includes(urlInstance.protocol);
  } catch (err) {
    console.log('Invalid URL: ', url);
    console.log(err);
    return false;
  }
};
