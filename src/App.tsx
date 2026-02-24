import { Tweet } from 'react-tweet';
import 'react-tweet/theme.css';
import './App.css';

const tweetIds = [
  '2024838969603887139',
  '2025151468383469919',
  '2025163775348015410',
  '2025428879725469866',
  '2025181478615990318',
  '2025732382733795479',
  '2025889245798580363',
  '2025853392862785768',
  '2025868914799112474',
  '2025859582707540335',
  '2025778493158805748',
  '2025983433370149039',
  '2025988691974672678',
  '2025966925503979833',
];

const App = () => {
  return (
    <div className="masonry">
      {tweetIds.map((id) => (
        <div key={id} className="tweet-card">
          <Tweet id={id} />
        </div>
      ))}
    </div>
  );
};

export default App;
