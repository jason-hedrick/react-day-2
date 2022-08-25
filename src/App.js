import './App.css';
import Button from "./Components/Button/Button"

const primaryButtons = {
  classes: [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-info",
    "btn-light",
    "btn-dark",
    "btn-link"
  ],
  buttonNames: [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
    "Link"
  ]
}

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-sm">
          {primaryButtons.classes.map((value, index) => {
            return <Button key={value + primaryButtons.buttonNames[index]} classes={"btn " + value} buttonName={primaryButtons.buttonNames[index]}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
