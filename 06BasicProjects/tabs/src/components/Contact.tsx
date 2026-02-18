import { FaTwitter, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const links = [
    {
      href: "https://x.com/_anugrahthomas",
      label: "Twitter",
      icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
    },
    {
      href: "https://youtube.com/@anugrahthomas",
      label: "YouTube",
      icon: <FaYoutube className="h-6 w-6 text-red-600" />,
    },
    {
      href: "https://github.com/anugrahthomas",
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6 text-gray-900" />,
    },
    {
      href: "https://instagram.com/_anugrahthomas",
      label: "Instagram",
      icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
    },
  ];
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex items-center gap-4">
        {links.map((link) => (
        <a
          href={link.href}
          key={link.label}
          rel="nooppener noreferrer"
          className="flex gap-1 text-gray-900 hover:text-gray-600"
        >
          {link.icon}
          <span className="">{link.label}</span>
        </a>
      ))}
      </div>
    </section>
  );
};

export default Contact;
