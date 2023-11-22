import './App.css';
import { useState } from 'react';
import useMessages from './useMessages';

function App() {
  const [forum, setForum] = useState('nasa');
  const {
    data: messages,
    loading: messagesLoading,
    error: messagesError,
  } = useMessages(forum);

  return (
    <div className="App">
      <button onClick={() => setForum('nasa')}>NASA</button>
      <button onClick={() => setForum('notNasa')}>Not NASA</button>
      {messagesError ? (
        <div className="error">
          <div className="error-contents">
            Something went wrong:
            <div className="error-message">{messagesError.message}</div>
          </div>
        </div>
      ) : messagesLoading ? (
        <div className="loading">Loading...</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((m) => (
            <React.Fragment key={m.id}>
              <dt>{m.author}</dt>
              <dd>{m.text}</dd>
            </React.Fragment>
          ))}
        </dl>
      ) : (
        'No messages'
      )}
    </div>
  );
}

export default App;