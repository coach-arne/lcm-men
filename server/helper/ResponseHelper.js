export const sendSuccessResponse = (req, res) => (data) => res.status(200).send(data);
export const sendGeneralErrorResponse = (req, res) => (error) => {
    // log the swallowed error
    console.error(error.stack);

    // send the error back to the client
    res.status(500).send({ stack: error.stack });
};
export const sendPromiseResponse = (req, res, promise) => promise
    .then(sendSuccessResponse(req, res))
    .catch(sendGeneralErrorResponse(req, res));