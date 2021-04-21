import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [content, setContent] = useState('');
    useEffect(() => {
        const getContent = async () => {
            const response = await axios.get(
                'http://localhost:3000'
            );
            setContent(response.data);
        };
        if (!content) {
            getContent();
        }
    }, [content]);
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{content}</p>
      </header>
    </div>
  );
}

export default App;
