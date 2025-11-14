import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-center px-4 py-3 border-t bg-background text-sm md:text-md text-muted-foreground">
      © 2025 - {new Date().getFullYear()} MAT Store ™ -- create by&nbsp;
      <Link
        href="https://aminetriki.com.tn"
        className="text-blue-500 hover:text-blue-800 transition-colors duration-200"
        target="_blank"
      >
        Amine Triki
      </Link>
    </div>
  );
};

export default Footer;
