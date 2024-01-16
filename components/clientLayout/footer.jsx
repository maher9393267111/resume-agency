import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { useRouter } from "next/router";

const navigation = {
  mainEn: [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "SmartCard", href: "/smartcard" },
    { name: "Prices", href: "/prices" },
    { name: "AboutUs", href: "/aboutus" },

    { name: "ContactUs", href: "/contact" },
  ],

  mainAr: [
    {
      name: "الرئسية",
      href: "/",
    },
    {
      name: "المينيو الالكتروني",
      href: "/menu",
    },

    {
      name: "البطاقة الذكية",
      href: "/smartcard",
    },

    {
      name: "الاسعار",
      href: "/prices",
    },
    {
      name: "من نحن ",
      href: "/aboutus",
    },

    {
      name: "اتصل بنا",
      href: "/contact",
    },
  ],


  "Twitter": null,
  "Instagram":"https://www.instagram.com/logic.4tech/?hl=ar",
  "Facebook": "https://www.facebook.com/profile.php?id=61554600908983",
  "website":"https://www.getmenu.ps", 
  
  
  "whatsapp" : `https://wa.me/+972507301710?text=Hello%2C%20I%20want%20to%20chat%20with%20you!`,


  social: [
    {
      name: "Twitter",
      href: null,
      icon: (props) => <FaTwitter {...props} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61554600908983",
      icon: (props) => <FaFacebook {...props} />,
    },
    {
      name: "Whatsapp",
      href: "https://wa.me/+972507301710?text=Hello%2C%20I%20want%20to%20chat%20with%20you!",
      icon: (props) => <FaWhatsapp {...props} />,
    },
    {
      name: "Telgram",
      href: null,
      icon: (props) => <FaTelegram {...props} />,
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/logic.4tech/?hl=ar",
      icon: (props) => <FaInstagram {...props} />,
    },
  ],
};

const Footer = () => {
  const { locale } = useRouter();

  const currentNavs = locale === "ar" ? navigation.mainAr : navigation.mainEn;

  return (
    <footer className="bg-white englishfont">
      <div className="max-w-7xl mx-auto py-10 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {currentNavs.map((item) => (
            <div key={item.name} className="px-5">
              <Link
                className="text-base text-gray-500 hover:text-gray-900"
                href={item.href}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
            target="_blank"
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-6 w-6  text-purple-100    hover:text-purple-800"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <p className="text-center  mt-6 text-gray-400 shimmer text-2xl font-semibold">
          &copy; {new Date().getFullYear()} UltraTech.
          {/* Powered by{' '}
          <a
            className="hover:text-green-600 transition"
            href="http://tealpod.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tealpod
          </a>
          . */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
