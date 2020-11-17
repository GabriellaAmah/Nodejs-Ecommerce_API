const logout = async (req, res) => {
    res
    .status(200)
    .cookie('serverToken', null, { httpOnly: true })
    .json({
        message : 'user successfully logged out'
    })
}

export default logout