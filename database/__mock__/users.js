const defaultUsers = [
    {
        id: 1,
        first_name: 'Admin',
        last_name: 'isKool',
        email: 'admin@iskool.com',
        hash: '1234'
    },
    {
        id: 2,
        first_name: 'Edgars',
        last_name: 'isKool',
        email: 'edgars@iskool.com',
        hash: '1234'
    },
    {
        id: 3,
        first_name: 'Zanda',
        last_name: 'isKool',
        email: 'zanda@iskool.com',
        hash: '1234'
    }
]

let users = defaultUsers

function reset(){
    users = [...defaultUsers]
}

function clear(){
    users = []
}

async function userExists(email){
    console.log('here ???')
    users = users.find(user => user.email === email)
    return Promise.resolve(users.length > 0)
}

module.exports = {
    reset,
    clear,
    userExists
}