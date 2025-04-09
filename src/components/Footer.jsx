const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold mb-1">Your Company</h3>
            <p className="text-sm">Creating digital experiences that matter</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 text-sm">
              Terms
            </a>
            <a href="#" className="hover:text-blue-300 text-sm">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-300 text-sm">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
