import Agent from './agent'

function Swarm(p5) {
  var swarm = [];
  var checkCount = 0;
  var friction = 0.99;

  var avoidRadius = 20;//15
  var avoidStrength = 0.1;//0.15

  var cohereRadius = 120;//30
  var cohereStrength = 0.1;//0.05

  var alignRadius = 60;//40
  var alignStrength = 0.1;//0.01

  p5.setup = () => {
    let myself = document.querySelector('.react-p5-wrapper');
    // let myContainer = myself.parentNode.parentNode;
    // console.log(myContainer);
    let myHeight = myself.clientHeight;
    let myWidth = myself.clientWidth;
    p5.createCanvas(myWidth, myHeight);
    p5.background(255);

    // Create agents
    for (var i = 0; i < 1200; i++) {
      // initialise with random position & velocity
      let x = p5.random(p5.width);
      let y = p5.random(p5.height);

      let newAgent = new Agent(p5, x, y, p5.random(-1, 1), p5.random(-1, 1), friction, swarm, cohereRadius ,avoidRadius, alignRadius, cohereStrength, avoidStrength, alignStrength);
      swarm.push(newAgent);
    }
  }

p5.draw = () => {
  p5.background(255);
  for (let agent of swarm) {
    agent.draw();

    checkCount++;
    if (checkCount > 50) {
        checkCount = 0;
        agent.calcMovement();
    }
    agent.move();
  }
}

  p5.windowResized = () => {
    let myContainer = document.querySelector('.react-p5-wrapper');
    let myHeight = myContainer.clientHeight;
    let myWidth = myContainer.clientWidth;
    p5.resizeCanvas(myWidth, myHeight);
  }
}

export default Swarm;