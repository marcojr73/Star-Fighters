import axios from "axios";

async function dataUser(userName: string){
    console.log(userName)
    try {
        const repositories = await axios.get(`https://api.github.com/users/${userName}/repos`)
        return repositories
    } catch (error) {
        console.log(error)
    }
}
    
export {
    dataUser
}