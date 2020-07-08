import { OrderedMap } from 'immutable';

export const allUsers = new OrderedMap({
    users: { "username": "Meddo", "password": "12345" }
})

export const Notes = new OrderedMap({
    notes: [{
        color: "#d3c59e",
        label: "Health",
        date: "5 June",
        description: "It is a long established fact that a render will be distracted by the readable"
    }, {
        color: "#dbbfaa",
        label: "Get a head",
        date: "5 June",
        description: "There are many variations of passages"
    }, {
        color: "#d3c59e",
        label: "Shop list",
        date: "7 June",
        list: ["Clothes", "Table", "Pizza", "Book", "Pen", "Keyboard"],
        description: "It is a long established fact that a render will be distracted by the readable"
    }, {
        color: "#d9bfad",
        label: "Family",
        date: "6 June",
        description: "There are many variations of passages"
    }, {
        color: "#d3c59e",
        label: "New Year",
        date: "8 June",
        description: "Contrary to popular belief"
    }, {
        color: "#d9bfad",
        label: "Personal",
        date: "6 June",
        list: ["Clothes", "Table", "Pizza", "Book", "Pen", "Keyboard"],
        description: "It is a long established fact that a render will be distracted by the readable"
    }, {
        color: "#d9bfad",
        label: "Food",
        date: "6 June",
        description: "There are many variations of passages"
    }]
})