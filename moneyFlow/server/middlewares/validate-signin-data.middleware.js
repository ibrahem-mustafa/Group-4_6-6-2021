const ValidateSigninData = (req, res, next) => {
    const {email, password} = req.body;

    let valid = true;

    if (!email || !password || password.length < 6 || !email.includes('@') || !email.includes('.com')) valid = false;

    if (!valid) return invalid(res)

    next()
    
}


function invalid(res) {
    return res.status(400).json({msg: 'Invalid Data'})
}

module.exports = {ValidateSigninData}