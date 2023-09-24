import React from "react";
import "./Home.scss";
import pic from "./poster-1.png";

const Card = ({ img }) => {
  return (
    <div className="card">
      <img src={img} alt="Your" />
    </div>
  );
};

const Row = ({ title }) => {
  return (
    <div className="row">
      <h1>{title}</h1>
      
      
      <div className="row__posters">
      
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      <Card  img={pic} />
      </div>
       


        
    </div>
  );
};

function Home() {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Popular on Netflix"} />
    </section>
  );
}

export default Home;
