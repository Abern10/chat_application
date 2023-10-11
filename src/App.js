import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine 
            height = "100vh"
            projectID = "7624e3ff-71af-4dae-bd05-cfae3e3aa9d7"
            userName = "Abern10"
            userSecret = "JettaGLI17!"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;