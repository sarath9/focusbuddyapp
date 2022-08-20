const mangoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mangoose.Schema

const userSchema = new Schema({
   email:{
    type: String,
    require: true,
    unique: true
   },
   password: {
    type : String,
    require : true
   }
})

//signup statis

userSchema.static.signUp = async function (email, password) {

const duplicateCheck = await this.findOne({email})

if(duplicateCheck){
    throw Error("Email already in use")
}
const salt = await bcrypt.genSalt(11)
const hash = await bcrypt.hash(password, salt)

const user = await this.create({email, password:hash})
return user
}

module.exports = mangoose.model('User', userSchema)