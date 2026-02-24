import { Tweet } from 'react-tweet';
import 'react-tweet/theme.css';
import './App.css';

const tweetIds = [
  '2024838969603887139',
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
