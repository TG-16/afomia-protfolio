import React from 'react';

function Engagement() {
  const engagements = [
    { id: 1, title: "YALI Mentorship", desc: "Mentored at YALI Regional Leadership Center on sustainable entrepreneurship.", image: "afomia.png" },
    { id: 2, title: "Blood Donation", desc: "Lifetime donor supporting health initiatives.", image: "afomia.png" },
    { id: 3, title: "Books for Africa", desc: "Volunteered to sort and pack books for literacy development.", image: "afomia.png" },
    { id: 4, title: "Yegna Impact", desc: "Led community initiatives on sustainability and youth empowerment.", image: "afomia.png" },
  ];

  return (
    <div className="page engagement">
      <h2>Engagement Page</h2>
      <div className="header"></div>
      <div className="engagement-container">
        {engagements.map((item, index) => (
          <div key={item.id} className={`engagement-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="engagement-image" style={{ backgroundImage: `url(${item.image})` }}></div>
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