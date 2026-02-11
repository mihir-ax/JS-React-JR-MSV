import React from "react";
import Card from "./Card";

function Page() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Team Members</h1>
        <p>Meet the creative minds !</p>
      </div>

      <div className="cards-grid">
        <Card
          img="https://i.pinimg.com/1200x/64/d2/ff/64d2ffc945d0a234627af314d5804bad.jpg"
          name="Pokemon"
          role="Electric"
          bio="I can give you electric shoks !! Be carefulll ! Pika Pika Pika !!"
          projects="50+"
          followers="50k+"
        />

        <Card
          img="https://i.pinimg.com/736x/6e/42/a9/6e42a97b73491894e7971781772851ae.jpg"
          name="Alone Boy"
          role="Single"
          bio="Just be alone and do anything and enjoy your freedom !!"
          projects="40+"
          followers="70k+"
        />

        {/* <Card img="" */}
      </div>
    </div>
  );
}

export default Page;
