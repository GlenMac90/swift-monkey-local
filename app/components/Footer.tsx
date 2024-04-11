import LogoWithTitle from "./nav-bar/LogoWithTitle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-16 flex w-full flex-col self-center lg:mt-[8.5rem] lg:max-w-[77.5rem]">
      <div className="flex-between w-full flex-col lg:flex-row">
        <LogoWithTitle />
      </div>
      <div className="paragraph-reg-5 lg:paragraph-reg-4 mt-7 flex w-full justify-center gap-3.5 border-t border-t-blush-500/30 pb-8 pt-6 text-black-600 md:justify-start lg:mt-10">
        <p>@{currentYear} SwiftMonkey</p>
      </div>
    </footer>
  );
};

export default Footer;
