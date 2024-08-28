import { useState } from "react"
import axios from 'axios';
import "./MainComponent.css"

interface MainComponentProps {
  colorChangeFunction: () => string;
}

export default function MainComponent({colorChangeFunction} : MainComponentProps) {
  const [currentDadJoke, setCurrentDadJoke] = useState<string>('...');
  const [animate, setAnimate] = useState(false);


  async function NewDadJokeHandles() {
    // Anim Effect
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 220);

    // API Call
    await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "text/plain"
      }
    }).then(response => response.data)
      .then(data => {

        // Setting the Background color randomly
        let newRGPColorString = colorChangeFunction();
        document.body.style.backgroundColor = newRGPColorString;
        const obj = document.getElementsByTagName('button');
        if (obj)
        {
          obj[0].style.backgroundColor = newRGPColorString;
        }

        setCurrentDadJoke(data);
    })
  } 

  return (
    <main className="Main-Box">
      <h1 className="Main-JokeHeader"><q>{currentDadJoke}</q></h1>
      <button id="Main-Button-New-Joke" className={animate ? 'animate' : ''} onClick={NewDadJokeHandles}>New Joke!</button>
      </main> // 
  );
}

// npm run dev