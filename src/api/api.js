import axios from "axios"
// const API_URL="http://localhost:8000"
const API_URL=import.meta.env.VITE_API_URL



export const registerPatient= async(data)=>{
    try {
        const res= await axios.post(`${API_URL}/registerPatient`,data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const bookAppointment= async(data)=>{
    try {
        const res=await axios.post(`${API_URL}/book_appointment`,data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const cancelAppointment= async(data)=>{
    try {
        const res= await axios.post(`${API_URL}/cancel_appointment`,data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const queryAppointment= async(doctor_id)=>{
    try {
        const res=  await axios.post(`${API_URL}/queryAppointment`,null,{
            params:{
                doctor_id:doctor_id
            }
        })
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getFirstaid= async(ques)=>{
    try {
        const res= await axios.get(`${API_URL}/get_first_aid`,{params:{
            ques:ques
        }})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


export const medicineSearch= async(med)=>{
    try {
        const res= await axios.get(`${API_URL}/medicine_search`,{
            params:{
                med:med
            }
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }

}