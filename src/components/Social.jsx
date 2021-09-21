import React from "react";

const SocialShare = [
  { iconName: "github", link: "https://github.com/mklarson14/" },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/mckenna-larson/",
  },
 
];
const Social = () => {
  return (
    <div className="share">
      <span>Share:</span>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>

      {/* END social */}
    </div>
  );
};

export default Social;
