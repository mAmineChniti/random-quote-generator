import { createBoard } from '@wixc3/react-board';
import { GenerateButton } from '../../../components/generate-button/generate-button';

export default createBoard({
  name: 'GenerateButton',
  Board: () => <GenerateButton onClick={handleClick as () => Promise<void>} />,
  isSnippet: true,
});

function handleClick(): Promise<void> {
throw new Error('Function not implemented.');
}
