import React, { useState, useEffect } from 'react';
import { GenerateButton } from '../generate-button/generate-button';
import { TweetBox } from '../tweet-box/tweet-box';

export interface QuoteCardProps {
        text: string;
        author: string;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({
        text: initialText,
        author: initialAuthor,
}) => {
        const [text, setText] = useState(initialText);
        const [author, setAuthor] = useState(initialAuthor);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
                fetchQuote();
        }, []);
        const fetchQuote = async () => {
                setLoading(true);
                const url =
                        'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1';
                const options = {
                        method: 'GET',
                        headers: {
                                'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
                                'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                        },
                };
                try {
                        const response = await fetch(url, options);
                        if (!response.ok) {
                                throw new Error('Failed to fetch quote');
                        }
                        const data = await response.json();
                        setText(data[0].text);
                        setAuthor(data[0].author);
                } catch (error) {
                        setError('Error fetching quote');
                        console.error('Error fetching quote:', error);
                } finally {
                        setLoading(false);
                }
        };

        return (
                <div
                        id="quote-box"
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-90 h-50 bg-blue-400 flex flex-col justify-center items-center text-white rounded-lg shadow-lg p-4"
                >
                        {loading ? (
                                <div>Loading...</div>
                        ) : error ? (
                                <div>{error}</div>
                        ) : (
                                <>
                                        <div id="text" className="text-base font-semibold mb-2">
                                                {text}
                                        </div>
                                        <div id="author" className="text-sm font-medium self-end">
                                                - {author}
                                        </div>
                                </>
                        )}
                        <div className="flex justify-between w-full">
                                <div className="mt-auto">
                                        <TweetBox text={text + "\n" + "- " + author} />
                                </div>
                                <div className="mt-auto">
                                        <GenerateButton onClick={fetchQuote} />
                                </div>
                        </div>
                </div>
        );
};
