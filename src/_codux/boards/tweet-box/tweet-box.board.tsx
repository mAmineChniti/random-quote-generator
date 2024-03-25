import { createBoard } from '@wixc3/react-board';
import { TweetBox } from '../../../components/tweet-box/tweet-box';

export default createBoard({
    name: 'TweetBox',
    Board: () => <TweetBox />,
    isSnippet: true,
});