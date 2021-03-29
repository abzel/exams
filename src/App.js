import { Card } from "./components/Card";
import "./App.css";
import pic from './1.png'
import pic1 from './2.png'
import pic2 from './3.jpeg'

function App() {
  const data = [
    {
        img: pic,
        title: "Nike",
        price: "2000сом",
    },
    {
        img: pic1,
        title: "Adidas",
        price: "3000сом",
    },
    {
        img: pic2,
        title: "Puma",
        price: "1000сом",
    },
  ];
  return (
    <div className="App">
      {data.map((el, id) => {
        return <Card data={el} key={id} />;
      })}
    </div>
  );
}
export default App;