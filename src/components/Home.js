import React from "react";
import Typewriter from "typewriter-effect";
import "../cssComponents/css.css";

const Home = () => {
  const style = {
    backgroundImage:
      "url('https://images.picxy.com/cache/2021/4/3/d167ea5f73ab2416e7dfc9af9fd8cb51.jpg')",
    height: "100vh",
    position:"relative",
    // marginTop:'-70px',
    // fontSize:'50px',
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize:"contain",
// backgroundPosition:"center"
  };
      
  
  return (
    <div className="text-white" style={style}>
      {/* <div className="intro"> */}
        <h1 style={{position:"center"}}>
          Hi

        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString("I am Vivek Maddeshiya ,")
            .callFunction(() => {
              console.log("String typed out!");
            })
            
            .callFunction(() =>{
              console.log("gg guys")
            })
            .start();
          }}
          />
          </h1>
        <h4> I am a <Typewriter
  options={{
    strings: ['Learner', 'Web Developer',"Coder"],
    autoStart: true,
    loop: true,
  }}
/>
        </h4>
         
      {/* </div> */}
    </div>
  );
};

export default Home;
