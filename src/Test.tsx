import BoxCSS from "./Box.module.css";
import { useState, useEffect } from "react";

function Test() {
  const [elements, setElements] = useState([]);
  const [visible, setVisible] = useState({});
  const [review, setReview] = useState({});
  useEffect(() => {
    fetch("https://api.insidetrak.com/homepage/get-latest-images")
      .then((response) => response.json())
      .then((data) => {
        const elements = data.data.map((element, index) => ({
          id: "ID-" + index,
          title: element.title,
          authorName: element.authorScreenName,
          date: element.publishedOn,
          description: element.description,
          img: element.thumbnailUrls.imedia_2048,
        }));
        setElements(elements);
        setVisible(Object.fromEntries(elements.map(({ id }) => [id, true])));
      });
  }, []);

  const imageVisibility = (id) => {
    setVisible((prevVisible) => ({
      ...prevVisible,
      [id]: !prevVisible[id],
    }));
  };
  const buttonReview = (id) => {
    setReview((preview) => ({
      ...preview,
      [id]: !preview[id],
    }));
  };

  const newTest = elements.map(
    ({ id, title, authorName, date, description, img }) => (
      <div key={id} className={BoxCSS.box}>
        <div id={id}>
          <div className={BoxCSS.all_img}>
            <div className={BoxCSS.button} onClick={() => imageVisibility(id)}>
              {visible[id] ? "Ukloni" : "Pokaži"}
            </div>
            {visible[id] && (
              <img src={img} className={BoxCSS.img} alt={title} />
            )}

            <div
              className={review[id] ? BoxCSS.clicked_butt : BoxCSS.button}
              onClick={() => buttonReview(id)}
            >
              {review[id] ? "Pregledano" : "Nepregledano"}
            </div>
          </div>
          <div>
            <i className={BoxCSS.date}>{date}</i>
            <div className={BoxCSS.author}>{authorName}</div>

            <div className={BoxCSS.title}> {title}</div>
            <div className={BoxCSS.description}>{description}</div>
          </div>
        </div>
      </div>
    )
  );
  return <ul>{newTest}</ul>;
}

export default Test;
