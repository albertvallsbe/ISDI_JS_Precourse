let name;
let totalPrice = 0;
let lastFlightsList = [];
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
// let connectingFlights = flights.slice();

const flyInformation = () => {

    askForName();

    flightHasLayover();
    showFlights();

    calculateAverageCost();
    showAverageCost();

    createConnectingFlights();
    showConnectingFlights();

    lastFlights();
    showLastFlightsList();
}

const lastFlights = () => {
    let flightsNumber = 4;
    for (let i = (flights.length - flightsNumber); i < flights.length; i++) {

        lastFlightsList.push(flights[i]);
    }

    return lastFlightsList;
}

const showLastFlightsList = () => {
    console.log("---------Show Today Last Flights----------");
    
    lastFlightsList.forEach((flight) => {
        console.log(`Fly: ${flight.id} Origin: ${flight.from} Destination: ${flight.to} Price: ${flight.cost} Scale: ${flight.scale}`)
    });
    console.log("------------------------------------------");
}

const createConnectingFlights = () => {
    for (let i = 0; i < flights.length; i++) {

        if (flights[i].scale === true) {
            connectingFlights.push(flights[i]);
        }
    }

    return connectingFlights;
};

const showConnectingFlights = () => {
    console.log("-----The list of connecting flights-------");

    connectingFlights.forEach((flight) => {
        console.log(`Fly: ${flight.id} Origin: ${flight.from} Destination: ${flight.to} Price: ${flight.cost} Scale: ${flight.scale}`);
    });

    console.log("------------------------------------------");
}

const calculateAverageCost = () => {

    flights.forEach((fligth) => {
        totalPrice += fligth.cost;
    });

    totalPrice = totalPrice / flights.length;

    return totalPrice;
}

const showAverageCost = () => {
    console.log(`--------Today average price is: ${totalPrice}-------`);
    console.log("------------------------------------------");
}

const flightHasLayover = (fly) => {
    let flyLayover = (fly) ? "Fly have scale" : "Fly doesn't have scale"
    return flyLayover;
}

const showFlights = () => {
    console.log("---------The list of today flights--------");
    console.log("------------------------------------------");
    flights.forEach((flight) => {
        console.log(`Fly: ${flight.id} Origin: ${flight.from} Destination: ${flight.to} Price: ${flight.cost} Scale: ${flightHasLayover(flight.scale)}`)
    });
    console.log("------------------------------------------");
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
    console.log(`Welcome to our Airline: Mr/Mrs  ${userName}`);
}

flyInformation();