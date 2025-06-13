import React from 'react';

function Mentorship() {
  const engagements = [
    { 
      id: 1, 
      title: "YALI Mentorship", 
      desc: "Mentored young African leaders at YALI Regional Leadership Center on sustainable entrepreneurship and green innovation. Conducted workshops reaching over 100 participants across East Africa.", 
      image: "yali.png" 
    },
    { 
      id: 2, 
      title: "Plymouth University Trainer and Mentor", 
      desc: "STEM Mentorship – Ethiopia & Uganda Mentored 40 female STEM students through workshops and webinars on career skills and empowerment, fostering leadership in East Africa.", 
      image: "plymouth.png" 
    },
    { 
      id: 3, 
      title: "The Tony Elumelu Foundation(TEF)", 
      desc: "The Tony Elumelu Foundation empowers African entrepreneurs across all 54 countries through training, funding, and support—driving job creation and economic growth across the continent.", 
      image: "tony.png" 
    },
    { 
      id: 4, 
      title: "Anchored generation Ethio Kenya Mentorship", 
      desc: "African Enterprise Kenya empowers youth through faith-based missions like the 6-month Foxfire Program, helping them grow in purpose and leadership.", 
      image: "kenyaMentor.png" 
    },
  ];

  return (
    <div className="page engagement">
      <h2>Mentorship</h2>
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

export default Mentorship;