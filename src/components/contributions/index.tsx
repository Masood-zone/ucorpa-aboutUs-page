import { useEffect, useState } from "react";

export default function Contributions() {
  // Create a counter effect for the StatCards
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-wrap">
        {/* Left side: Statistics */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <StatCard number={56825} label="Clients" highlight={true} />
          <StatCard number={56825} label="Commits" />
          <StatCard number={372} label="Team Member" />
          <StatCard number={50} label="First Year of use" />
        </div>
        {/* Right side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col lg:justify-end lg:items-end justify-start items-start text-right lg:text-left mt-12 lg:mt-0">
          <h3 className="text-lg font-bold mb-2">Contributions</h3>
          <h2 className="text-4xl text-left lg:text-right font-bold mb-4">
            Stay aware of your public contributions
          </h2>
          <p className="text-gray-600 mb-8 text-left lg:text-right">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sunt in culpa qui
            officia deserunt mollit elit, sed do eiusmod tempor incididunt.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 hover:bg-green-600">
            Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  number,
  label,
  highlight = false,
}: {
  number: number;
  label: string;
  highlight?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000; // Total duration of the counter animation in milliseconds
    const increment = end / (duration / 16); // How much the number increases per frame (assuming ~60 FPS)

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end); // Ensure exact end value
      } else {
        setCount(Math.ceil(start)); // Update with the current value
      }
    }, 16); // 16ms for ~60FPS updates

    return () => clearInterval(counter);
  }, [number]);

  return (
    <div
      className={`lg:w-[265px] h-[131px] p-6 flex flex-col items-center justify-center cursor-pointer border transition-all duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ${
        highlight
          ? "bg-green-500 text-white shadow-lg border-none"
          : "bg-white hover:bg-green-500 hover:text-white"
      }`}
    >
      <h3 className="text-3xl font-bold mb-2 transition-colors duration-300">
        {count === 50 ? count.toLocaleString() + "%" : count.toLocaleString()}
        {/* Displaying the number with commas */}
      </h3>
      <p
        className={`${
          highlight ? "text-gray-100" : "text-gray-600"
        } transition-colors duration-300`}
      >
        {label}
      </p>
    </div>
  );
}
