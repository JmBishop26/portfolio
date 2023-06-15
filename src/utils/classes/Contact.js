import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
export default class Contact{

    async sendEmail(messageProps, res){
        try {
            await sendgrid.send(messageProps)
            return res.status(200).json({success: true, msg: "Email sent to JM Obispo."})
        } catch (error) {
            return res.status(500).json({error: `${error}`});
        }
    }
    
    async setEmailProps(req){
        const message = {
            to: "johnmichael.obispo@gmail.com", // Your email where you'll receive emails 
            from: "jmobispo26@gmail.com", // your website email address here
            subject: `Email From Portfolio Website`,
            html: `
                <p>Name: ${req.body.name}</p>
                <p>Email: ${req.body.email}</p><br/>
                <p>Message:</p>
                <p>${req.body.message}</p>
                <a href="mailto:${req.body.email}">
                <button>Reply</button>
                </a>
            `,
          }
        return message
    }

}