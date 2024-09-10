import { behance, facebook, twitter } from "../../assets";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Zara Alex",
      role: "BRANDING",
      image: "https://wpthemesgrid.com/themes/ucorpa/img/team1.png",
    },
    {
      name: "Naimur Rahman",
      role: "DEVELOPER",
      image: "https://wpthemesgrid.com/themes/ucorpa/img/team2.png",
    },
    {
      name: "Shakil Unique",
      role: "DESIGNER",
      image: "https://wpthemesgrid.com/themes/ucorpa/img/team3.png",
    },
    {
      name: "Petti Meckova",
      role: "MARKETING",
      image: "https://wpthemesgrid.com/themes/ucorpa/img/team4.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Team</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercita sit amet, consectetur adipisition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="w-full lg:w-64 h-96 flex flex-col items-center justify-center rounded-md border hover:shadow">
      <img
        src={image}
        alt={name}
        className="w-auto h-auto rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        <SocialIcon icon={facebook} />
        <SocialIcon icon={twitter} />
        <SocialIcon icon={behance} />
      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a href="#" className="text-gray-400 hover:text-gray-600">
      <span className="sr-only">{icon}</span>
      <div className="w-7 h-7 border-2 rounded-full items-center justify-center p-1">
        <img src={icon} alt={icon} className="w-full h-full object-contain" />
      </div>
    </a>
  );
}
