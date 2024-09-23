import React from 'react';

export interface GenerateButtonProps {
  onClick: () => void | Promise<void>;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    const result = onClick();
    if (result instanceof Promise) {
      result.catch((error) => {
        console.error('Error executing onClick:', error);
      });
    }
  };
  return (
    <div className="text-center mt-4">
      <button
        id="new-quote"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        New Quote
      </button>
    </div>
  );
};
