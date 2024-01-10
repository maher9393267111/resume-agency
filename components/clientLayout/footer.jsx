import Link from 'next/link';
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

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'SignUp', href: '/legal/terms' },
    { name: 'ContactUs', href: '/contact' },
    { name: 'AboutUs', href: '/aboutus' },
    { name: 'Prices', href: '/prices' },
    { name: 'Menu', href: '/menu' },
    { name: 'SmartCard', href: '/smartcard' },


  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/driwwwle',
      icon: (props) => (
    <FaTwitter  {...props}/>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://github.com/itsnitinr/driwwwle-v2',
      icon: (props) => (
     <FaFacebook {...props}/>
      ),
    },
    {
      name: 'Whatsapp',
      href: 'https://discord.gg/YER2pF6CZS',
      icon: (props) => (
   <FaWhatsapp {...props}/>
      ),
    },
    {
      name: 'Telgram',
      href: 'https://discord.gg/YER2pF6CZS',
      icon: (props) => (
   <FaTelegram {...props}/>
      ),
    },


    {
      name: 'Instagram',
      href: 'https://discord.gg/YER2pF6CZS',
      icon: (props) => (
   <FaTelegram {...props}/>
      ),
    },

  ],
};

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-10 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5">
              <Link
              className="text-base text-gray-500 hover:text-gray-900"
              href={item.href}>
              
                  {item.name}
                
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6  text-purple-100    hover:text-purple-800" aria-hidden="true" />
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
