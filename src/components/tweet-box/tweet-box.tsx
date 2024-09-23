import React from 'react';

export interface TweetBoxProps {
  text: string;
}

export const TweetBox: React.FC<TweetBoxProps> = ({ text }) => {
  const urlText = encodeURIComponent(text);
  const tweetUrl = 'https://twitter.com/intent/tweet?text=' + urlText;
  const openTweetPopup = () => {
    window.open(tweetUrl, '_blank', 'width=600,height=400');
  };
  return (
    <a
      id="tweet-quote"
      onClick={openTweetPopup}
      href="https://twitter.com/intent/tweet?text="
      className="rounded-lg inline-block w-8 h-8 overflow-hidden bg-white"
      target="_blank" rel="noreferrer"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
      </svg>
    </a>
  );
};
