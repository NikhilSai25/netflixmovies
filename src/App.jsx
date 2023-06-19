import React from "react";
import Card from './Cards';
import './index.css';
import Sdata from "./Sdata";
import Netflix from "./Netflix";


// console.log(Sdata[0].sname);
// function ncard(val){
//     console.log(val)
//     return (
//         <Card
//             imgsrc={val.imgscr}
//             title={val.sname}
//             link={val.links}

//         />
//     )

// }

// function App(){
//     return (
//         <>
//             <h1 className="heading_style">Netflix movies</h1>     
//             {Sdata.map(ncard)}
//         </>
//     )
// }



const App =() =>  {
    return (
        <>
            <h1 className="heading_style">Netflix movies</h1>
            <h1 className="heading_style">My git</h1>
            {Sdata.map((val,index) =>{
                console.log(index);
                return (
                    <Card
                        key = {val.id}
                        imgsrc={val.imgscr}
                        title={val.sname}
                        link={val.links}

                    />
                );

             }) }
        </>
    )
}


// const favseries="netflix";

// const FavS=()=>{
// if(favseries === "netflix"){
//     return <Netflix/>

// }
// else{}
// }

// const App= () => (
//     <>
//         <h1 className="heading_style">Netflix movies</h1>
//         <FavS/>
//     </>
// )

export default App;