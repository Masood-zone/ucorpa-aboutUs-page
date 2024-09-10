export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Why Choose Us</h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mb-8"></div>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation is more than 800 miles away
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            number: "01",
            title: "Creative Design",
            subtitle: "Best Solutions",
            description:
              "Quamat nulla lectus mattis mauris nonumy nectry tilum crasmetus.",
          },
          {
            number: "02",
            title: "Creative Design",
            subtitle: "Running Design",
            description:
              "Quamat nulla lectus mattis mauris nonumy nectry tilum crasmetus.",
          },
          {
            number: "03",
            title: "Premium Support",
            subtitle: "24/7 Support",
            description:
              "Quamat nulla lectus mattis mauris nonumy nectry tilum crasmetus.",
          },
        ].map((item, index) => (
          <div key={index} className="flex">
            <div className="text-8xl font-bold text-gray-200 mr-4 hover:text-green-500 transition-colors duration-500 ease-out">
              {item.number}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-green-500 font-medium mb-2">{item.subtitle}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
