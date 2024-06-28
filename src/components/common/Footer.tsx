import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-40 mt-8">
      <div className="flex flex-col items-start">
        <div className="flex justify-center space-x-4 mb-4 text-gray-400">
          <Link to="/" className="hover:underline border-r-2 border-gray-400 pr-5 text-sm">
            Home
          </Link>
          <Link to="/" className="hover:underline border-r-2 border-gray-400 pr-5 text-sm">
            Terms and Conditions
          </Link>
          <Link to="/" className="hover:underline border-r-2 border-gray-400 pr-5 text-sm">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:underline border-r-2 border-gray-400 pr-5 text-sm">
            Collection Statement
          </Link>
          <Link to="/" className="hover:underline border-r-2 border-gray-400 pr-5 text-sm">
            Help
          </Link>
          <Link to="/" className="hover:underline">
            Manage Account
          </Link>
        </div>
        <div className="text-center mb-4 text-gray-400 text-sm">
          &copy; 2016 DEMO Streaming. All Rights Reserved.
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/social/facebook-white.svg"
              alt="Facebook"
              className="h-6"
            />
          </Link>
          <Link
            to="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/social/twitter-white.svg"
              alt="Twitter"
              className="h-6"
            />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/social/instagram-white.svg"
              alt="Instagram"
              className="h-6"
            />
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            to="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/store/play-store.svg"
              alt="Google Play"
              className="h-10"
            />
          </Link>
          <Link
            to="https://www.microsoft.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/store/windows-store.svg"
              alt="Microsoft Store"
              className="h-10"
            />
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/store/app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
