import { ChevronRightIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="relative bg-image text-white py-5">
      {/* Overlay div element */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      {/* Container div element */}
      <div className="relative container mx-auto px-4 flex w-full justify-between z-20">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="font-medium">Home</span>
            <ChevronRightIcon size={20} />
          </div>
          <button className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded">
            About Us
          </button>
        </div>
      </div>
    </header>
  );
}
