import React from 'react';
import Mentorship from './Mentorship';

function Engagement() {
  const engagements = [
    // { 
    //   id: 1, 
    //   title: "YALI Mentorship", 
    //   desc: "Mentored young African leaders at YALI Regional Leadership Center on sustainable entrepreneurship and green innovation. Conducted workshops reaching over 100 participants across East Africa.", 
    //   image: "afomia.png" 
    // },
    { 
      id: 2, 
      title: "Blood Donation Advocacy", 
      desc: "Lifetime blood donor and advocate for health initiatives. Organized community blood drives that have collected over 500 units of blood for local hospitals.", 
      image: "blood.png" 
    },
    { 
      id: 3, 
      title: "Books for Africa", 
      desc: "Volunteered with Books For Africa initiative, helping to sort and pack over 10,000 educational books for distribution to schools in underserved communities.", 
      image: "book.png" 
    },
    { 
      id: 4, 
      title: "Yegna Impact", 
      desc: "Led community programs focused on sustainability and youth empowerment, impacting over 200 young women through STEM education and leadership training.", 
      image: "yenga.png" 
    },
  ];

  return (
    <div className="page engagement">
       <Mentorship />
      <h2>Community Engagement</h2>
      <div className="engagement-container">
        {engagements.map((item, index) => (
          <div key={item.id} className="engagement-item">
            <div 
              className="engagement-image" 
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="engagement-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Engagement;