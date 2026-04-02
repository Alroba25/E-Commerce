interface IImage {
  src: string;
  alt: string;
  className?: string;
}
const Image = ({ src, alt, className }: IImage) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-20 h-20 object-cover ${className}`}
      />
    </>
  );
};

export default Image;
