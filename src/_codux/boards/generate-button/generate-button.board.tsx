import { createBoard } from '@wixc3/react-board';
import { GenerateButton } from '../../../components/generate-button/generate-button';

export default createBoard({
  name: 'GenerateButton',
  Board: () => <GenerateButton onClick={onclick} />,
  isSnippet: true,
});
