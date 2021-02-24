const AvatarImage: React.FC<{ imageUrl: string; altText: string }> = ({
  imageUrl,
  altText,
}): JSX.Element => (
  <span className="avatar">
    <amp-img
      src={imageUrl || '/images/no-image.png'}
      alt={altText || 'No Image'}
      width="250"
      height="250"
    />
  </span>
);

export default AvatarImage;
