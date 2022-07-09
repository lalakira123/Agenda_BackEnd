import jwt from 'jsonwebtoken';

function validateToken(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '').trim();

    const secretKey = process.env.JWT_TOKEN;

    jwt.verify(token, secretKey, (error, result) => {
        if(error) return res.status(401).send({error});
        if(result) {
            res.locals.userId = result.userId;
            next();
        }
    })
}

export default validateToken;