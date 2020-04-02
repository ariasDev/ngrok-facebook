exports.serverTest = (req, res, next) => {
    res.status(200).json({'response': 'Server is okay'})
}