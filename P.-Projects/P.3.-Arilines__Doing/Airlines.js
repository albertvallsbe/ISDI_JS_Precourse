let name;
let totalPrice = 0;
let flightsInfo = [];
let connectingFlights = [];
const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const flyInformation = () => {

    askForName();
    createflightsInfo();
    showFlights();
    calculateAverageCost();
    showAverageCost();
    createConnectingFlights();
    showConnectingFlights();
    //showLastFlights();

}

//const showLastFlights = () => {}

const createConnectingFlights = () => {
    for (let i = 0; i < flights.length; i++) {
        
        if (flights[i].scale === true) {
            connectingFlights[i] = flights[i];
            //console.log(`Fly: ${flights.id} Origin: ${flights.from} Destination: ${flights.to} Price: ${flights.cost} Scale: ${flights.scale}`);
        }
    } return connectingFlights;

};

const showConnectingFlights = () => {
    console.log("The list of today connecting flights ");
    connectingFlights.forEach((flight) => {
        console.log(`Fly: ${flight.id} Origin: ${flight.from} Destination: ${flight.to} Price: ${flight.cost} Scale: ${flight.scale}`);
    });
}

const calculateAverageCost = () => {

    flights.forEach((fligth) => {
        totalPrice += fligth.cost;
    });

    totalPrice = totalPrice / flights.length;

    return totalPrice;
}

const showAverageCost = () => {
    console.log(`The average of price of today flights is: ${totalPrice}`);

}

const createflightsInfo = () => {

    for (let i = 0; i < flights.length; i++) {
        flightsInfo[i] = flights[i];
        if (flights[i].scale === true) {

            flightsInfo[i].scale = "Fly have scale";
        } else {
            flightsInfo[i].scale = "Fly doesn't have scale";
        }
    } return flightsInfo;

}

const showFlights = () => {
    console.log("The list of today flights ");
    flightsInfo.forEach((flight) => {
        console.log(`Fly: ${flight.id} Origin: ${flight.from} Destination: ${flight.to} Price: ${flight.cost} Scale: ${flight.scale}`)
    });
}


const askForName = () => {

    userName = prompt(" Tell your name: ");

    if (userName === null || userName === "") {
        alert(" Empty, Please tell your name! ");
        askForName();
    } else if (!isNaN(userName)) {
        alert(" It's not a name! Try again: ");
        askForName();
    } else {
        printWelcome();
        return userName;
    }

}

const printWelcome = () => {
    console.log(`Welcome to our Airline, ${userName}`);
}

flyInformation();