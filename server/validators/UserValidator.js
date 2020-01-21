export const isValidForCreation = (req, res, next) => {
    const user = req.body;
    const errors = [];

    if (!user.username) {
        errors.push({ level: 'error', code: 'USR0001', message: 'username is mandatory' });
    }

    if (!user.password) {
        errors.push({ level: 'error', code: 'USR0002', message: 'password is mandatory' });
    }

    if (!user.email) {
        errors.push({ level: 'error', code: 'USR0003', message: 'email is mandatory' });
    }

    if (errors.length > 0) {
        res.status(400).send(errors);
    } else {
        next();
    }
};