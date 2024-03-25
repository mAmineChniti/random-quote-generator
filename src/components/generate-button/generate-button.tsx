import React from 'react';

export interface GenerateButtonProps {
  onClick: () => Promise<void>;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
  return (
    <div className="text-center mt-4">
      <button id="new-quote"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        New Quote
      </button>
    </div>
  );
};
