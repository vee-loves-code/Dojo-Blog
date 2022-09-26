import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
       setName('Vivian');
       setAge(30);
    }
   
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick = {handleClick}> CLick Me</button>
        </div>
     );
}
 
export default Home;