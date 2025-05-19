import Image from "next/image";

const ClientBg = () => {
  return (
    <div className="">
      <Image
        src="/images/client-bg.webp"
        alt="Client Background"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ClientBg;
