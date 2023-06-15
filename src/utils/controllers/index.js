import Contact from "../classes/Contact"

const contact = new Contact()

export const postMethod=async(req, res)=>{
    try {
        const messageProps = await contact.setEmailProps(req)
        contact.sendEmail(messageProps, res)
    } catch (error) {
        res.status(400).json({error: `${error}`})
    }
}