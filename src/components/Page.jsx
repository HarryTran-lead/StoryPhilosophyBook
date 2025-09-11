import React from "react";
import "../styles/StoryBook.css";

export default function Page({ title, content, img, pageNumber, isCover }) {
  return (
    <div className={`page ${isCover ? "page-cover" : ""}`}>
      {isCover ? (
        <h1>{title}</h1>
      ) : (
        <>
          {title && <h2>{title}</h2>}
          {img && <img src={img} alt={title} />}
          {content && <p>{content}</p>}
          <span className="page-number">{pageNumber}</span>
        </>
      )}
    </div>
  );
}
