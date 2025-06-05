"use client";
import Image from "next/image";
import Link from "next/link";
import eventFirst from "../../public/assets/images/eventFirst.jpg";
import eventSecound from "../../public/assets/images/eventSecound.jpg";
import eventThrid from "../../public/assets/images/eventThrid.jpg";
import eventForth from "../../public/assets/images/eventForth.jpg";

const EventCards = () => {
  const events = [
    {
      id: 1,
      image: eventFirst,
      title: "Community Run",
      date: "2023-10-01",
      description: "Join us for a community run to connect and inspire each other.",
      links: "https://lu.ma/de0fd6sz",
    },
    {
      id: 2,
      image: eventSecound,
      title: "Yoga in the Park",
      date: "2023-10-15",
      description: "Relax and rejuvenate with a yoga session in the park.",
      links: "https://lu.ma/de0fd6sz",
    },
    {
      id: 3,
      image: eventThrid,
      title: "Charity Run",
      date: "2023-11-05",
      description: "Run for a cause and support local charities.",
      links: "https://lu.ma/de0fd6sz",
    },
    {
      id: 4,
      image: eventForth,
      title: "Trail Adventure",
      date: "2023-11-20",
      description: "Explore nature with a guided trail run.",
      links: "https://lu.ma/de0fd6sz",
    },
  ];
  return (
    <div className="flex flex-row max-w-[100vw] overflow-x-scroll snap-x snap-mandatory gap-6 mt-4">
      {events.map((event) => (
        <div key={event.id} className="w-[400px] shrink-0 snap-start flex flex-col items-start">
          <Image className="object-cover  mb-2" src={event.image} alt={event.title} width={400} height={200} />
          <div className=" w-[100%] flex justify-between">
            <Link className=" bg-main_black p-3 hover:bg-alternativ_black" href={event.links}>
              Join event
            </Link>

            <div className=" *:text-main_black">
              <p>{event.title}</p>
              <p>{event.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCards;
