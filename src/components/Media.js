import React from 'react';
// import './MediaAndCoverage.css';

const mediaData = [
  {
    id: 1,
    title: 'Meet Afomia Andualem!',
    date: 'July 24, 2024',
    description: 'Afomia has over five years of experience in sustainability and entrepreneurship.  Afomia is currently the CEO and co-founder of Agelgil Eco-Packaging.',
    mediaType: 'image',
    mediaSrc: 'media1.png',
    link: 'https://web.facebook.com/story.php?story_fbid=796003876023777&id=100068425156159&mibextid=WC7FNe&rdid=vGB4zlDNUc5GUX7R#',
    linkText: 'Read Press Release',
  },
//   {
//     id: 2,
//     title: 'Press Release - New Product ',
//     date: 'June 1, 2025',
//     description: 'We are excited to announce the launch of our latest product, designed to revolutionize the industry. Read more in the press release below.',
//     mediaType: 'image',
//     mediaSrc: 'afomia.png',
//     link: 'https://example.com/press-release',
//     linkText: 'Read Press Release',
//   },
  {
    id: 2,
    title: 'Afomia Andualem: innovative Sustainable Packaging',
    date: 'June 1, 2025',
    description: 'Electrical engineer Afomia Adnualem and her team developed both the process and key machinery required to turn crop waste into sturdy and reliable packaging',
    mediaType: 'image',
    mediaSrc: 'media2.png',
    link: 'https://africaprize.raeng.org.uk/2022-cohort/afomia-andualem',
    linkText: 'Read Press Release',
  },
  {
    id: 3,
    title: 'Top 20 Female Entrepreneurs in Africa" BIC Africa ',
    date: 'June 1, 2025',
    description: 'Afomia Andualem is an entrepreneur and co-founder of Agelgil Eco-Packaging Company based in Ethiopia. She has a Bachelor’s degree in Electrical Engineering and also holds a BA in Management. ',
    mediaType: 'image',
    mediaSrc: 'media3.png',
    link: 'https://bic-africa.eu/online-acceleration-programme-for-women-entrepreneurs-2023-cohort/',
    linkText: 'Read Press Release',
  },
//   {
//     id: 3,
//     title: 'Interview on Tech News TV',
//     date: 'May 20, 2025',
//     description: 'Our CEO sat down with Tech News TV to discuss the future of innovation and technology.',
//     mediaType: 'video',
//     mediaSrc: 'https://www.w3schools.com/html/mov_bbb.mp4', // Example video link
//     link: 'https://example.com/interview',
//     linkText: 'Watch Interview',
//   },
  {
    id: 4,
    title: 'Interview with Afomia ANDUALEM, CEO Agelgil Eco Packaging Ethiopia',
    date: 'May 20, 2025',
    description: '- #BICAfrica Annual Gathering 2023',
    mediaType: 'video',
    mediaSrc: 'https://www.youtube.com/watch?v=XWRFPhforro', // Example video link
    link: 'https://www.youtube.com/watch?v=XWRFPhforro',
    linkText: 'Watch Interview',
  },
  // Add more media items here
];

const MediaAndCoverage = () => {
  return (
    <div className="media-coverage-container">
      <h1>Media and Coverage</h1>
      <p>
        Welcome to our Media and Coverage page! Here, you can find all the latest news, press releases,
        and media appearances about our company.
      </p>

      <section className="media-items">
        {mediaData.map(({ id, title, date, description, mediaType, mediaSrc, link, linkText }) => (
          <article key={id} className="media-item">
            <div className="media-preview">
              {mediaType === 'image' ? (
                <img src={mediaSrc} alt={title} />
              ) : mediaType === 'video' ? (
                <video controls>
                  <source src={mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
            <h2>{title}</h2>
            <p className="media-date">Published on {date}</p>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
          </article>
        ))}
      </section>
    </div>
  );
};

export default MediaAndCoverage;
