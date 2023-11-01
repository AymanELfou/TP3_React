import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [dataArr,setDataArr] = useState([
    {txt:'Sport',id:uuidv4()},
    {txt:'Watch Film',id:uuidv4()},
    
  ])

  /***********input***************/
  const [valtxt,setvaltxt]=useState('');

  const modifytxt = (e) =>{
    setvaltxt(e.target.value)
  }


//maper le tableau des taches dans chaque li
  return (
    <div className="container">
      <Form></Form>

      

      
    </div>
  );
}

export default App;
