export default function Banner() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Welcome To Our Company
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="pb-6">
              <h3 className="text-3xl font-medium pb-2">
                Welcome To{" "}
                <span className="font-bold text-green-500">Ucorpa Ltd</span>
              </h3>
              <hr className="w-20 h-1 bg-green-500" />
            </div>
            <p className="text-gray-600 mb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. sed ut perspiciatis
              unde sunt in culpa qui officia deserunt mollit anim id est
              laborum. sed ut perspiciatis unde omnis iste natus error sit
              voluptatem Excepteu
            </p>
            <p className="text-gray-600 mb-8">
              sunt in culpa qui officia deserunt mollit anim id est laborum. sed
              ut perspiciatis Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. sed
              ut perspi.
            </p>
            <div className="space-x-4">
              <button className="bg-gray-800 text-white px-4 py-3 hover:bg-gray-700">
                Our Blog
              </button>
              <button className="bg-green-500 text-white px-4 py-3 hover:bg-green-600">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-4 shadow-lg">
            <img
              src="https://wpthemesgrid.com/themes/ucorpa/img/about.jpg"
              alt="Person working"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
