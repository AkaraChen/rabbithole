import { Tweet } from 'react-tweet';
import 'react-tweet/theme.css';
import './App.css';
import tweetIds from './data.json';

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
