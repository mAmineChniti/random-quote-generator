import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { GenerateButton } from '../generate-button/generate-button';
import { TweetBox } from '../tweet-box/tweet-box';

interface QuoteData {
  text: string;
  author: string;
}

const fetchQuote = async (): Promise<QuoteData> => {
  const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
    },
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to fetch quote');
  }
  const data = await response.json();
  return data[0];
};

export const QuoteCard: React.FC = () => {
  const { data, error, isLoading, refetch } = useQuery<QuoteData, Error>({
    queryKey: ['quote'],
    queryFn: fetchQuote,
  });

  const handleGenerateButtonClick = async () => {
    try {
      await refetch();
    } catch (err) {
      console.error('Error during refetch:', err);
    }
  };

  return (
    <div
      id="quote-box"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-90 h-50 bg-blue-400 flex flex-col justify-center items-center text-white rounded-lg shadow-lg p-4"
      role="dialog"
      aria-labelledby="quote-text"
      aria-describedby="quote-author"
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching quote</div>
      ) : (
        data && (
          <>
            <div id="text" className="text-base font-semibold mb-2" aria-labelledby="quote-text">
              {data.text}
            </div>
            <div id="author" className="text-sm font-medium self-end" aria-labelledby="quote-author">
              - {data.author}
            </div>
          </>
        )
      )}
      <div className="flex justify-between w-full">
        <div className="mt-auto">
          <TweetBox text={`${data?.text}\n- ${data?.author}`} />
        </div>
        <div className="mt-auto">
          <GenerateButton onClick={handleGenerateButtonClick} />
        </div>
      </div>
    </div>
  );
};
