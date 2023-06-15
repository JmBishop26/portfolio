import { postMethod } from "@/utils/controllers";

export default async function handler(req, res){
    try {
        const { method } = req
    
          switch(method){
            case "POST":
                postMethod(req, res)
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
                res.status(405).end(`Method: ${method} not allowed`)
                break;
          }
    
      } catch (e) {
          console.error(e);
      }

}