import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="page about">
      <h2>About Afomia</h2>
      <div className="about-content">
        <div className="about-section">
          <img id="aboutPP" src="pp.png" alt="Afomia Andualem" className="about-img" />
          <div className="about-text">
            <h3>Professional Background</h3>
            <p>
I’m Afomia Andualem — a purpose-driven entrepreneur, mentor, author, and advocate for sustainability, anchored leadership, and community transformation. My life is guided by a vision to build a legacy of impact, integrity, and service — one grounded in faith and covered by grace.
My academic background includes a BSc in Electrical and Computer Engineering from Bahir Dar University, a BA in Management from Alpha University, and further  studies in Sustainable Entrepreneurship at the Technical University of Munich(ISS 2023). I also completed business leadership training at Clark Atlanta University as part of the Mandela Washington Fellowship.
              {showMore && (
                <>
                  <br /><br />
                  At my core, I believe in building systems that serve both people and the planet. In 2021, I co-founded Agelgil Eco-Packaging, a company that transforms agricultural waste into tree-free packaging solutions.<br /> 
                  Our mission wasn’t just environmental—it was deeply social, empowering local communities and reducing dependency on plastic. While Agelgil continues to grow as its own entity, it remains a proud piece of my broader life’s work.<br /> 

I also co-founded Yegna Impact, a nonprofit dedicated to empowering women and youth through sustainability education, mental health advocacy, and inclusive development. Through this and other initiatives, I’ve been fortunate to lead, mentor, and collaborate across Africa and globally. <br />


In addition to building ventures, I am a published author and proud of my journey into writing. My first book marked a personal milestone, and I am now preparing to release my second book titled "Little Me with Big Dreams", which shares my story of faith, courage, and leadership as a young African woman creating change. I also serve as a board member at the Pahal Horizon International Research Journal, where I help elevate research and reflection on development and sustainability topics across the Global South. <br />

My mentorship work spans several platforms — including MicroMentor, YALI RLC, the Tony Elumelu Foundation, and my own initiative: the Anchored Generation Academy, a mentoring and coaching program I established to empower anchored, responsible young leaders. I actively mentor women in STEM through a Royal Academy of Engineering–funded program in partnership with Plymouth University, and support cross-border empowerment programs in Kenya and Ethiopia. <br />

Beyond professional platforms, I serve my community through volunteer work at my local church, where I support youth education and women’s groups. I believe service is a lifestyle — whether it’s mentoring a student, planting a tree, or simply showing up with compassion.
One of the joys of my journey is connecting people — across countries, communities, and continents. I regularly use my global network to link young innovators, organizations, and changemakers with opportunities for collaboration, learning, and scale.
My story is still unfolding, but I hope every chapter reflects the same intention: to live with purpose, build with heart, and uplift others — always.
                </>
              )}
            </p>
            <button className="read-more-btn" onClick={toggleShowMore}>
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>

        {/* Work Experience */}
        <div className="about-section">
          <img src="worke.png" alt="Afomia's Achievements" className="about-img" />
          <div className="about-text">
            <h3>WORK EXPERIENCE</h3>
            <table>
              <tbody>
                <tr><td><ul><a href='https://agelgileco-package.com/'><li>Agelgil Eco-Packaging | CEO & Co-founder</li></a></ul></td><td><img src="ageligl.png" alt="logo" /></td></tr>
                <tr><td><ul><a href='https://micromentor.org/member/1457474'><li>Micromentor.org | Volunteer Mentor</li></a></ul></td><td><img src="micro.png" alt="logo" /></td></tr>
                <tr><td><ul><li>Pahal Journal | Associate Editor & Board</li></ul></td><td><img src="phal.png" alt="logo" /></td></tr>
                <tr><td><ul><li>YegnaImpact | Founder & Sustainability Head</li></ul></td><td><img src="yengaIcon.png" alt="logo" /></td></tr>
                <tr><td><ul><a href='https://www.youtube.com/watch?v=JGLVC7HXn0Y&feature=youtu.be'><li>Plymouth University | Mentor</li></a></ul></td><td><img src="play.png" alt="logo" /></td></tr>
                <tr><td><ul><li>Addis Ababa Youth & Sport | Teacher</li></ul></td><td><img src="aayouth.png" alt="logo" /></td></tr>
                <tr><td><ul><li>Engineering Association | Project Leader</li></ul></td><td><img src="book.png" alt="logo" /></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Education */}
        <div className="about-section">
          <img src="education.png" alt="Afomia's Achievements" className="about-img" />
          <div className="about-text">
            <h3>EDUCATION</h3>
            <table>
              <tbody>
                <tr><td><ul><li><b>BAHIR DAR UNIVERSITY</b>: BSc in Electrical & Computer Engineering</li></ul></td><td><img src="bdu.jpg" alt="logo" /></td></tr>
                <tr><td><ul><li><b>ALPHA UNIVERSITY</b>: BA in Management</li></ul></td><td><img src="alphau.png" alt="logo" /></td></tr>
                <tr><td><ul><a href='https://mgt.tum.de/our-stories-with-impact/stories/ready-to-lead-with-a-sustainable-vision-how-the-iss-shaped-afomias-entrepreurial-journey'><li><b>TU MUNICH</b>: Sustainable Entrepreneurship</li></a></ul></td><td><img src="tum.png" alt="logo" /></td></tr>
                <tr><td><ul><li><b>CLARK ATLANTA (YALI)</b>: Business Leadership</li></ul></td><td><img src="clark.png" alt="logo" /></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Anchors */}
        <div className="about-section">
          <img src="mission.png" alt="Afomia's Vision" className="about-img" />
          <div className="about-text">
            <h3>My Anchors</h3>
            <p>
              My life is anchored in faith, guided by purpose, and lived through service. I believe in leading with grace and integrity, empowering others through education, mentorship, and sustainable action. Whether I’m building eco-innovations, mentoring young women in STEM, or serving in my local church, everything I do is rooted in a commitment to leave a lasting impact. I value connection — linking people, ideas, and communities across borders to create collective transformation. For me, sustainability is not just environmental — it’s about living in a way that honors both people and purpose, for generations to come
            </p>
          </div>
        </div>

        {/* Out of Work */}
        <div className="about-section">
          <img src="outofwork.png" alt="Afomia's Achievements" className="about-img" />
          <div className="about-text">
            <h3>Out of Work</h3>
            <p>
              Outside of my leadership and mentoring work, I embrace practices that keep me grounded, creative, and connected:
              <br />📚 Reading and journaling – especially around growth, purpose, and reflection<br />
              🙏 Mindfulness and prayer – including reading the Bible and spending time in stillness<br />
              🤝Volunteering – particularly within my local church and youth communities<br />
              🎸 Playing guitar – a quiet way to express and recharge<br />
              🏋️‍♀️ Gym & movement – for both physical and mental strength<br />
              🎵 Listening to music – always based on my mood, from uplifting to introspective<br />
              🌍 Traveling – and connecting with people from diverse cultures and backgrounds<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
