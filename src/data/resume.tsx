import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Edmealem K. Alemayehu',
  initials: 'EK',
  url: 'https://dillion.io',
  location: 'Bahir Dar, Ethiopia',
  locationLink: 'https://www.google.com/maps/place/bahirdar',
  description:
    'FullStack Web Developer | JavaScript, TypeScript, MERN, Next.js, Nest.js',
  summary:
    'I am a Full Stack JavaScript web developer. I use  react and nextJs for crafting and building the front-end of my application and nodejs frameworks expressjs and nestjs for building the back-end api. For Database management I use both sql and no-sql database solutions for storing and managing data in my application. I am a highly skilled Full Stack developer bringing 2+ years of experience in designing and developing robust full-stack web applications. With my abilities and dedication, I have contributed to 30+ Open-source projects (repos). I have a passion for web development. I am a quick learner and always eager to expand my knowledge and skills in the field. Currently I am a 5th year software engineering student at Bahir dar university.',
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'mongoose',
    'Nest.js',
    'typeorm',
    'Postgres',
    'mysql',
    'TailwindCSS',
    'GraphQL',
    'Apollo',
    'Rest Api Design',
    'backend development',
    'frontend development',
    'Docker',
    'java',
    'C++',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'edmealemkassahun@gmail.com',
    tel: '+251908005801',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/BaGorK',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/edmealem-k',
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'edmealemkassahun@gmail.com',
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  education: [
    {
      school: 'Bahir Dar University',
      href: 'https://www.bdu.edu.et/',
      degree:
        "Bachelor's Degree of Computer Science, Software Engineering (BCS)",
      logoUrl: '/university.png',
      start: '2021',
      end: 'now',
    },
  ],

  projects: [
    {
      title: 'hotel booking app',
      href: 'https://youtu.be/aL1ZA9-wQEo',
      dates: 'Jun 2024 - now',
      active: true,
      description:
        'This is a full-stack web application that I am currently working on. It has a dashboard for the system admin and a dashboard for the hotel manager. The admin can create, update, and delete hotels, rooms, and bookings. The manager can view the bookings, check-in, and check-out guests. The app also has a user dashboard where users can sign up, log in, book hotels, view their bookings, and also cancel their bookings.',
      technologies: [
        'JavaScript',
        'TailwindCSS',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Cloudinary',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://hotel-booking-app-intern.onrender.com',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/BaGorK/Hotel-Booking-App',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/projects/hotelbookingapp/vid.mp4',
    },
    {
      title: 'booking app mern',
      href: 'https://youtu.be/UZKCE-h0fVw',
      dates: 'Jun 2024 - Sept 2024',
      active: true,
      description:
        'Booking app mern is a full stack web application using Typescript. It has authentication, file upload, and stripe payment implementation for booking hotels. This app allows users to sign up and log in, create hotels, book hotels, and view their bookings.',
      technologies: [
        'Typescript',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'TailwindCSS',
        'Stripe',
        'Cloudinary',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://bookingapp-mern.onrender.com/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/BaGorK/bookingApp-mern',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/projects/bookingappmern/vid.mp4',
    },
    {
      title: 'the-wild-oasis',
      href: 'https://youtu.be/b7LAIAYoFZQ',
      dates: 'Feb 29, 2024 - May 4, 2024',
      active: true,
      description:
        'The Wild Oasis is an admin dashboard for an ideal hotel company that allows managers to create, update, and delete bookings, review checkin, checkout and unconfirmed bookings. On the dashboard the managers can see todays activities, summary of total sales, and also can perform checkin and checkout guests.',
      technologies: [
        'React.js',
        'JavaScript',
        'Supabase',
        'Styled Components',
        'react hook form',
        'tanstack-query',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://the-wild-oasis-pro.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/BaGorK/the-wild-oasis',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/projects/thewildoasis/vid.mp4',
    },
  ],
} as const;
