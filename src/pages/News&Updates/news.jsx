import "./news.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const newsData = [
  {
    id: 1,
    category: "CATEGORY",
    date: "June 2025",
    title: " Damian Lillard Makes Triumphant Return to Portland.TrailBlazers fans rejoice as their franchise icon comes home once again.",
    image: "/lillard.webp"
  },
  {
    id: 2,
    category: "CATEGORY",
    date: "december 2024",
    title: "Anthony Davis Traded to Dallas Mavericks in Blockbuster Deal.In one of the most shocking trades in NBA history, the Dallas Mavericks",
    image: "/davis.avif"
  },
  {
    id: 3,
    category: "CATEGORY",
    date: "July 2025",
    title: "OKC's Star Trio Secures Future with Max Deals.Shai Gilgeous-Alexander, Jalen Williams, and Chet Holmgren ink extensions through 2029, locking in Oklahoma City's core.",
    image: "okc.jpg"
  }
];

const News = () => {
  return (
    <>
    <section className="news-section">
      <div className="news-left">
        <h2 className="news-title">Latest <br /> News & Updates</h2>
        <p className="news-desc">
         get NBA latest news and updates from around the world especially on the NBA, NBA G-League, and WNBA ON TIME
        </p>
        <button className="news-btn">View All News</button>
      </div>

      <div className="news-right">
        {newsData.map((item) => (
          <div className="news-card" key={item.id}>
            <div className="news-meta">
              <img src={item.image} alt="news" className="news-img" />
              <div>
                <span className="news-category">{item.category}</span>
                <span className="news-date">• {item.date}</span>
              </div>
            </div>
            <h3 className="news-headline">{item.title}</h3>
            <FaArrowUpRightFromSquare className="news-icon" />
          </div>
        ))}
      </div>
    </section>

      <section className="promo-section">
      <div className="promo-overlay">
        <h2 className="promo-title">Join the Action Today!</h2>
        <p className="promo-desc">
          Stay updated with breaking NBA, G-League, and WNBA news. Don’t miss
          out on the latest trades, highlights, and stories.
        </p>
        <button className="promo-btn">Start Now</button>
      </div>
    </section>
    </>
  );
};

export default News;
