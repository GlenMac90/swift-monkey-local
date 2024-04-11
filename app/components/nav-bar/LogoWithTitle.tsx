import Image from "next/image";

const LogoWithTitle = () => {
  return (
    <div className="flex items-center gap-2">
      <figure className="size-[1.875rem] shrink-0 rounded-full lg:size-9">
        <Image
          src="/logos/logo.jpg"
          alt="Swift Monkey Logo"
          priority
          height={50}
          width={50}
          className="shrink-0 rounded-full object-contain"
        />
      </figure>
      <figcaption className="text-xl font-bold text-green">
        SwiftMonkey
      </figcaption>
    </div>
  );
};

export default LogoWithTitle;
