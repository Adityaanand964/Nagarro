const nodemailer = require('nodemailer')


const  WelEmailSender = (str) => {

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{

        user:"rakeshbaghel9621@gmail.com",
        pass:"Rak@9621"
    }
})

const mailOption = {

    from:"rakeshbaghel9621@gmail.com",
    to: str,
    subject: "sending email  using nodejs",
    text:"thank you for login BANARASI CRAFT"
}

transporter.sendMail(mailOption,(err,res) => {

    if(err){
   console.log("email not sended",err)

    }else{

        console.log("email is sended")
    }

})

}

module.exports = WelEmailSender


