const AvatarImage: React.FC<{
  imageUrl?: string;
  altText?: string;
  width: string;
  height: string;
}> = ({ imageUrl, altText, width, height }): JSX.Element => (
  <span className="avatar">
    <amp-img
      src={imageUrl || '/images/no-image.png'}
      alt={altText || 'No Image'}
      width={width}
      height={height}
    />
  </span>
);

export default AvatarImage;
