const Footer = () => {
  return (
    <div className="relative mt-16 bg-primary">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-primary-focus"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#014D87"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-between  pb-10 flex-row items-center">
          <p className="text-sm text-gray-100">
            © 2021 -{" "}
            <a
              href="https://www.instagram.com/rahmatagungj"
              target="_blank"
              rel={"noopener nofollow noreferrer"}
            >
              Rahmat Agung Julians
            </a>
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://www.instagram.com/rahmatagungj"
              target="_blank"
              rel={"noopener nofollow noreferrer"}
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="#ffffff" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
