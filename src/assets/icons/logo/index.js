import Image from "next/image";

const Logo = ({ onTop = false }) => {
  return (
    <div style={{ marginTop: !onTop && 19, marginLeft: onTop && 8 }}>
      <Image
        src={`${onTop ? '/images/logo-white.svg' : '/images/logo.png'}`}
        alt="Logo"
        width={onTop ? 90 : 100}
        height={onTop ? 60 : 100}
      />
    </div>
  );
};

export default Logo;
