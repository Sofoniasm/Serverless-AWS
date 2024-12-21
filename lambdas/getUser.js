
exports.handler = async Event => {
    console.log ('event', Event)
    
    if (!Event.pathParameters || !Event.pathParameters.ID){
        // failed without an ID
    }

    let ID = Event.pathParameters.ID;

    if (data[ID]){
        // return the data
    }

    // failed as ID not in the data

}

const data = {
    1234: {name: 'Anna Jones', age: 25, job: 'journalist'}
    7893: {name: 'Chris Smith', age: 25, job: 'Teacher'}
    5123: {name: 'Hanibal Melaku', age: 25, job: 'sports man'}
}