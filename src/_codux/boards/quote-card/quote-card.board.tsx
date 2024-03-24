import { createBoard } from '@wixc3/react-board';
import { QuoteCard } from '../../../components/quote-card/quote-card';

export default createBoard({
  name: 'QuoteCard',
  Board: () => (
    <QuoteCard
      text="Make sure to replace the placeholder content comment with the actual content you want to render inside the quote-box div."
      author="A Dimbo"
    />
  ),
  isSnippet: true,
});
