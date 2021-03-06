import {verify} from 'jsonwebtoken';
import {SECRET} from '../configuration/configuration';

export default ({ whitelist }) => (req, res, next) => {

    if (whitelist.some((path) => req.path.startsWith(path))) {
        next();
    } else {
        const AuthorizationHeader = req.header('Authorization');
        console.log(AuthorizationHeader);

        if (
            AuthorizationHeader &&
            AuthorizationHeader.split(' ')[1]
        ) {
            const token = AuthorizationHeader.split(' ')[1];
            verify(token, SECRET, (err, decoded) => {
                if (err) {
                    res.status(401).send({ message: "token validation failed" });
                } else {
                    req.user = decoded;
                    next();
                }
            });
        } else {
            res.status(401).send({ message: 'No authorization header or bearer found' });
        }

    }
}