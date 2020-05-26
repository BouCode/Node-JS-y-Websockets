const Model = require ('./model');

function addUser (user) {
    const myUser = new Model (user);
    return myUser.save ();
}

async function getUsers (filterUser) {
    let filter = {};

    if (filterUser != null) {
        filter = {
            user: filterUser
        }
    }
    const Users = await Model.find(filter);
    return Users;
}


module.exports = {
    add: addUser,
    list: getUsers,
}