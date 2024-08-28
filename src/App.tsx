import MainComponent from './Components/MainComponent'
import "./App.css"


export default function App() {

  function ChangeBackgroundColor(): string {
    let r: number, g: number, b: number;
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <>
      <div className="Background">
        <MainComponent colorChangeFunction={ChangeBackgroundColor} />
      </div>
    </>
  )
}
