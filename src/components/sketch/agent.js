function Agent(p5, xPos, yPos, xVel, yVel, friction, swarm, cohereRadius ,avoidRadius, alignRadius, cohereStrength, avoidStrength, alignStrength) {
  this.pos = p5.createVector(xPos, yPos);
  this.vel = p5.createVector(xVel, yVel);

  this.draw = function () {
    // draw starling at its current position
    p5.fill(255);
    p5.stroke(0)
    const size = 2;
    p5.ellipse(this.pos.x, this.pos.y, size + this.vel.x, size - this.vel.y);
  }

  this.move = function () {
    // add its velocity to its position
    this.vel.limit(3);
    this.pos.add(this.vel);
    this.vel.mult(friction);

    // wrap around canvas border
    if (this.pos.x > p5.width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = p5.width;
    if (this.pos.y > p5.height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = p5.height;
  }

  this.calcMovement = function () {
    let averagePos = p5.createVector();
    let steerVec = p5.createVector();
    let avoidVec = p5.createVector();
    let averageVel = p5.createVector();
    let neighbourCount = 0;

    // compare with every other swarm member
    for (let neighbour of swarm) {
      // distance between current agent and other swarm member
      let neighbourDist = this.pos.dist(neighbour.pos);

      // if the other agent is close enough
      if (neighbourDist < cohereRadius && neighbourDist > 0) {
        // add its position to later acquire an average
        neighbourCount++;
        averagePos.add(neighbour.pos);
      }

      // if the other agent is too close
      if (neighbourDist < avoidRadius && neighbourDist > 0) {
        // push them away from close neighbours
        let pushVec = p5.constructor.Vector.sub(this.pos, neighbour.pos);
        pushVec.normalize();
        avoidVec.add(pushVec);
      }

      if (neighbourDist < alignRadius && neighbourDist > 0) {
        // add up the neighbours velocity
        averageVel.add(neighbour.vel);
      }
    }

    // take average position of neighbours
    if (neighbourCount > 0) averagePos.div(neighbourCount);

    // take its vector and add to velocity
    steerVec = p5.constructor.Vector.sub(averagePos, this.pos);
    steerVec.normalize();
    steerVec.mult(cohereStrength);
    this.vel.add(steerVec);

    // add repulsion vector to velocity
    avoidVec.normalize();
    avoidVec.mult(avoidStrength);
    this.vel.add(avoidVec);

    // add close neighbour avg velocity
    averageVel.normalize();
    averageVel.mult(alignStrength);
    this.vel.add(averageVel);
  }
}

export default Agent;