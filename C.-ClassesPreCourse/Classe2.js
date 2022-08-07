const contacts = [
    { id: 1, name: "Paul", age: 12, gender: "male" },
    { id: 2, name: "Anna", age: 22, gender: "female" },
    { id: 3, name: "Margaret", age: 72, gender: "female" },
    { id: 4, name: "John", age: 42, gender: "male" },
    { id: 5, name: "Scarlett", age: 32, gender: "female" }
];

const askForNameAndGreet = () => {
    const name = prompt("What's your name?");
    console.log(name);
    return name;
};
const showContacts = () => {
    console.log("****Contacts****");
    contacts.forEach((contact) => console.log(`Id: ${contact.id} Name: ${contact.name} Age: ${contact.age} Gender: ${contact.gender}`));
    console.log("****************");
};

const askForRole = () => {
    const role = prompt("What's your role (user/admin?)");

    if (role === nule) {
        askForRole();
    } else if (role.toLowerCase() !== "user" && role.toLowerCase() !== "admin") {
        askForRole();
    } else {
        return role.toLowerCase();
    }
};
const askForAction = () => {
    const action = prompt("What action do ypu want (create/delete)");

    if(action === null){
        askForAction();

    }else if (action.toLowerCase() !== "create" && action.toLowerCase() !== "delete"){
        alert("Please insert a valid action");
        askForAction();
    }else {
        return action.toLowerCase();
    }
};

const adminAction =()=>{
    const action = askForAdminAction();

    if (action === "create"){
        const newContact={}

        newContact.name = prompt("Name: ");
        newContact.age = +prompt("Age: ");
        newContact.gender = prompt("Gender: ");
        newContact.id = contacts.length +1;
        
        contacts.push(newContact);
        
        showContacts();
    } else if(action === "delete"){
        showContacts();
        const idToDelete = +prompt("Insert Id to delete");

        contacts = contacts.filter((contact) => contact.id !== idToDelete)
    }
};

const contactsExercise = () => {

    askForNameAndGreet();
    const role = askForRole();

    if (role === "user") {
        alert("Here you have the available contacts");
        showContacts();
    }  else if (role === "admin"){
        adminAction();
    };
};

contactsExercise();
