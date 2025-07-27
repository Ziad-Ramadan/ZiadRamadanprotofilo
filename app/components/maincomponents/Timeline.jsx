import React, { Fragment } from 'react';

const events = [
  {
    Heading: "2001: Hello World",
    SubHeading: "The King is here.",
    direction: "right",
  },
  {
    Heading: "2018: Started My Coding Journey",
    SubHeading: "Began with Visual Basic and C.",
    direction: "left",
  },
  {
    Heading: "2020: Joined the College of Computing",
    SubHeading: "Started learning and exploring.",
    direction: "right",
  },
  {
    Heading: "2023: ITI Summer Training",
    SubHeading: "Open Source Development.",
    direction: "left",
  },
  {
    Heading: "2023: Started My Web Development Career",
    SubHeading: "Working with React.js, Next.js, and Tailwind CSS.",
    direction: "right",
  },
  {
    Heading: "2024: DataCamp Scholarship",
    SubHeading: "Data Science with Python.",
    direction: "left",
  },
  {
    Heading: "2024: DEPI",
    SubHeading: "Microsoft Machine Learning Engineer Track.",
    direction: "right",
  },
    {
    Heading: "2025: Route",
    SubHeading: "Microsoft ASP .Net Core Developer",
    direction: "left",
  },
];


const Circle = () => {
  return <div className='rounded-full w-4 h-4 bg-red-500 mx-auto' />;
};

const Pillar = () => {
  return <div className='rounded-t-full rounded-b-full w-2 h-full bg-gradient-to-b from-red-700 to-red-600 mx-auto' />;
};

const EventCard = ({ Heading, SubHeading }) => {
  return (
    <div className='flex flex-col gap-y-2 border border-red-600 shadow-md rounded-xl p-4 mx-2'>
      <div className='text-red-700 font-bold text-lg border-b'>{Heading}</div>
      <div className='text-sm text-white'>{SubHeading}</div>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className='bg-transparent flex flex-col gap-y-3 w-full'>
      <Circle />
      {events.map((event, key) => (
        <Fragment key={key}>
          <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
            {event.direction === "left" ? (
              <EventCard Heading={event.Heading} SubHeading={event.SubHeading} />
            ) : (
              <div />
            )}
            <Pillar />
            {event.direction === "right" ? (
              <EventCard Heading={event.Heading} SubHeading={event.SubHeading} />
            ) : (
              <div />
            )}
          </div>
          {key < events.length - 1 && <Circle />}
        </Fragment>
      ))}
    </div>
  );
}
