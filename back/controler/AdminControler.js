const Admin = require('../models/AdminSchema')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
// const { Admin } = require('')


const register = async (req, res) => {
    try {
        const { email, password, confirmePassword } = req.body
        const FindAdmin = await Admin.findOne({ email })
        if (FindAdmin) {
            return res.status(400).json({ success: false, message: 'Admin exist' })
        } else {
            const hashedPassword = await bcrypt.hash(password, saltRounds)
            const hashedConfirmePassword = await bcrypt.hash(confirmePassword, saltRounds)
            const newAdmin = new Admin({ ...req.body, password: hashedPassword, confirmePassword: hashedConfirmePassword })
            if(password===confirmePassword){
                await newAdmin.save()
                return res.status(200).json({ success: true, message: 'Admin add success', data: newAdmin })
                
            }
            return res.status(400).json({ success: false, message: 'password and confirme password are not egale' })
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: "server admin error" });

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const LoginAdmin = await Admin.findOne({ email });
        console.log("find : " ,LoginAdmin)
        if (!LoginAdmin) {
            return res.status(400).json({ success: false, error: "bad credentials" });
        } else { 
            const match = await bcrypt.compare(password, LoginAdmin.password);
            console.log("match : ",match)
            if (!match) {
                console.log('not match')
                return res.status(400).json({ success: false, error: "bad credentials" });
            } else{

                var token = await jwt.sign({ id: LoginAdmin._id }, process.env.privateKey);
                console.log( token )
                return res.json({
                    success: true,
                    message: "Admin loggedIn successfully",
                    token:token,
                    LoginAdmin:LoginAdmin
                });
            }
            }
    } catch (error) { 
        console.log('LoginAdmin false')

        return res.status(400).json({ success: false, error });
    }
};
module.exports = {
    register,
    login,
};