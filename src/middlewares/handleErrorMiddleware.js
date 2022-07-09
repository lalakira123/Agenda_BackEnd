const serviceErrorToStatusCode = {
    conflict: 409,
    notFound: 404,
    forbidden: 403
}

export function conflict() {
    return { type: 'conflict' };
}

export function notFound() {
    return { type: 'notFound' };
}

export function forbidden() {
    return { type: 'forbidden' }
}

export default async function handleError( error, req, res, next ) {
    if(error.type){
        res.sendStatus(serviceErrorToStatusCode[error.type]);
    }

    console.log(error);

    res.sendStatus(500);
}