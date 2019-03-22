// Rover Object Goes Here
// ======================
var rover = { 
  direction: "N",
  position: [0, 0],
  travelLog: []
};


//Mars Grid 10x10
var marsGrid = [];
for (var x = 0; x < 10; x++) {
  marsGrid[x] = [];
  for (var y = 0; y < 10; y++) {
    marsGrid[x][y] = 0;
  }
};

// turnLeft function
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "W"
    break;
    case "E":
    rover.direction = "N"
    break;
    case "S":
    rover.direction = "E"
    break;
    case "W":
    rover.direction = "S"
    break;
  }
  console.log("turnLeft was called! Current direction: " + rover.direction);
}

// turnRight function
function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E"
    break;
    case "E":
    rover.direction = "S"
    break;
    case "S":
    rover.direction = "W"
    break;
    case "W":
    rover.direction = "N"
    break;
  } 
  console.log("turnRight was called! Current direction: " + rover.direction);
}

// moveForward function
function moveForward(rover){
  switch (rover.direction) {
    case "N":
       if (rover.position[1] === 0) {
         console.log("Can't move forward. End of the grid. Current position: " + rover.position);
       } else {
        rover.position[1] -=1;
        rover.travelLog.push(["[" + rover.position[0],rover.position[1] + "]"]);
        console.log("moveForward was called. Current position: " + rover.position)
       }
    break;
    case "W":
    if (rover.position[0] === 0) {
      console.log("Can't move forward. End of the grid. Current position: " + rover.position);
    } else {
      rover.position[0] -=1;
      rover.travelLog.push(["[" + rover.position[0],rover.position[1] + "]"]);
      console.log("moveForward was called. Current position: " + rover.position)
    }
    break;
    case "S":
    if (rover.position[1] === 9) {
      console.log("Can't move forward. End of the grid. Current position: " + rover.position);
    } else {
      rover.position[1] +=1;
      rover.travelLog.push(["[" + rover.position[0],rover.position[1] + "]"]);
      console.log("moveForward was called. Current position: " + rover.position)
    }
    break;
    case "E":
    if (rover.position[0] === 9) {
      console.log("Can't move forward. End of the grid. Current position: " + rover.position);
    } else { 
      rover.position[0] +=1;
      rover.travelLog.push(["[" + rover.position[0],rover.position[1] + "]"]);
      console.log("moveForward was called. Current position: " + rover.position)
    }
    break;
}
console.log("Number of movements: " + rover.travelLog.length + ". TravelLog: [" + rover.travelLog + "]");
}

//moveBackwards function
function moveBackwards(rover) {
  switch (rover.direction) {
    case "N":
       if (rover.position[1] === 9) {
         console.log("Can't move backwards. End of the grid. Current position: " + rover.position);
       } else {
        rover.position[1] +=1;
        rover.travelLog.push(["[" + rover.position[0],rover.position[1] + "]"]);
        console.log("moveBackwards was called. Current position: " + rover.position)
       }
    break;
    case "W":
    if (rover.position[0] === 9) {
      console.log("Can't move backwards. End of the grid. Current position: " + rover.position);
    } else {
      rover.position[0] +=1;
      rover.travelLog.push(["[" + rover.position[0],rover.position[1] + "]"]);
      console.log("moveBackwards was called. Current position: " + rover.position)
    }
    break;
    case "S":
    if (rover.position[1] === 0) {
      console.log("Can't move backwards. End of the grid. Current position: " + rover.position);
    } else {
      rover.position[1] -=1;
      rover.travelLog.push(["[" + rover.position[0],rover.position[1] + "]"]);
      console.log("moveBackwards was called. Current position: " + rover.position)
    }
    break;
    case "E":
    if (rover.position[0] === 0) {
      console.log("Can't move backwards. End of the grid. Current position: " + rover.position);
    } else { 
      rover.position[0] -=1;
      rover.travelLog.push(["[" + rover.position[0],rover.position[1] + "]"]);
      console.log("moveBackwards was called. Current position: " + rover.position)
    }
    break;
  }
  console.log("Number of movements: " + rover.travelLog.length + ". TravelLog: [" + rover.travelLog + "]");
}

// Go to start point [0,0]
function startPoint(rover) {
  rover.position = [0,0];
  console.log("Returning to start point!! Current position: " + rover.position);
}

//Commands
function command(commandList){
  for(var c = 0; c < commandList.length; c++){
    var commands = commandList[c];
  switch(commands){
    case "f":
    moveForward(rover)
    break;
    case "b":
    moveBackwards(rover)
    break;
    case "l":
    turnLeft(rover)
    break;
    case "r":
    turnRight(rover)
    break;
    default:
    console.log("Command not valid.");
    }
}
}
