import { OrderedMap } from 'immutable';

export const allUsers = new OrderedMap({
    users: { "username": "Meddo", "password": "12345" }
})

export const Notes = new OrderedMap({
    notes: [{
        label: "Health",
        description: "It is a long established fact that a render will be distracted by the readable"
    }, {
        label: "Get a head",
        description: "It is a long established fact that a render will be distracted by the readable"
    }, {
        label: "Shop list",
        description: "It is a long established fact that a render will be distracted by the readable"
    }, {
        label: "Family",
        description: "It is a long established fact that a render will be distracted by the readable"
    }, {
        label: "Food",
        description: "It is a long established fact that a render will be distracted by the readable"
    }]
})