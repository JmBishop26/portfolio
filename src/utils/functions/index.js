import axios from "axios"
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const sendEmail = async (formData)=>{
    try {
        const config={
            method:"POST",
            url: "/api/contacts",
            data: formData,
        }

        const response = await axios(config)
        if(response.status===200){
            MySwal.fire({
                icon: "success",
                title: response.data['msg']
            }).then((result)=>{
                if(result.isConfirmed){
                    window.location.reload(true)
                }
            })
        }
    } catch (error) {
        console.error(`${error}`)
    }
}