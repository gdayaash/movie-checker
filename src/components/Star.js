import { useState } from "react";

const StarBox = {
  display: "flex",
  alignItems: "center",
  gap: 4,
};

export default function Stars({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [temp, setTemp] = useState(0);
  return (
    <article style={StarBox}>
      <aside>
        {Array.from({ length: maxRating }, (_, index) => {
          const value = index + 1;
          return (
            <Star
              filled={value <= (temp || rating)}
              hover={() => setTemp(value)}
              key={value}
              leave={() => setTemp(0)}
              click={() => setRating(value)}
            />
          );
        })}
      </aside>
      <aside>{rating || temp}</aside>
    </article>
  );
}

function Star({ filled, hover, leave, click }) {
  const starStyle = {
    width: "20px",
  };
  return (
    <svg
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "gold" : "none"}
      viewBox="0 0 24 24"
      stroke="#000"
      style={starStyle}
      onMouseEnter={hover}
      onMouseLeave={leave}
      onClick={click}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="{2}"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}
