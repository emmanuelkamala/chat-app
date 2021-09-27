import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID="9d45dd29-33f2-4919-8340-19bcaf6a2e77"
      userName="ejoka"
      userSecret="tanzania"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
