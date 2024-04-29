import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link

      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl font-semibold rounded md:pr-2 hover:text-[#8E8D8E]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
