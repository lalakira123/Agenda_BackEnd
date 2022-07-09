const serviceErrorToStatusCode = {

}

export default async function handleError( error, req, res, next ) {
    if(error.type){
        res.sendStatus(serviceErrorToStatusCode[error.type]);
    }

    console.log(error);

    res.sendStatus(500);
}