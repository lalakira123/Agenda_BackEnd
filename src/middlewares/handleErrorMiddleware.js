const serviceErrorToStatusCode = {
    conflict: 409
}

export function conflict() {
    return { type: 'conflict' };
}

export default async function handleError( error, req, res, next ) {
    if(error.type){
        res.sendStatus(serviceErrorToStatusCode[error.type]);
    }

    console.log(error);

    res.sendStatus(500);
}