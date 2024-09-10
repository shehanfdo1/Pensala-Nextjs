import Navbar from '@/components/Navbar'
import React from 'react'
import ImageCard from '../components/ImageCard';

export default function Home() {
  const cards = [
    {
      imgSrc: 'https://www.open.edu.au/-/media/blog/2023/03-march/careers-in-maths.jpg?h=477&iar=0&w=715&rev=47f96a32d6b4449993d9b33e5d8e7f05&extension=webp&hash=285AEAB654D4E0C839D4BEDA2991F915',
      title: 'Mathematics',
      description: 'Mastering logic, numbers, and patterns.',
    },
    {
      imgSrc: 'https://ih1.redbubble.net/image.647643070.4336/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',
      title: 'Sinhala',
      description: 'Exploring language, culture, and expression.',
    },
    {
      imgSrc: 'https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/07/15153622/Untitled-design-62.png',
      title: 'Commerce',
      description: 'Understanding trade, finance, and strategy.',
    },
    {
      imgSrc: 'https://static1.bigstockphoto.com/5/1/1/large1500/115606073.jpg',
      title: 'History',
      description: 'Uncovering past events and impacts.',
    },
  ];
  
  return (
    <div>
      <hr className='w-3/4 mx-auto my-0' />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <ImageCard
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
