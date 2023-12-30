import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        placeholder="blur"
        loading="lazy"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "inherit",
        }}
      />
    </div>
  );
};
export default BackgroundImage;
