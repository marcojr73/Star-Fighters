import axios from "axios";

async function dataUser(userName: string){
    try {
        const {data} = await axios.get(`https://api.github.com/users/${userName}/repos`)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function battleLog(repositoriesfirst, repositoriesSecond){
    let starsFirst: number = 0
    let starssecond: number = 0
    repositoriesfirst.forEach(repo => {
        starsFirst += repo.stargazers_count
    })
    repositoriesSecond.forEach(repo => {
        starssecond += repo.stargazers_count
    })

    if(starsFirst>starssecond){
        return {
            winner: repositoriesfirst[0].owner.login,
            loser: repositoriesSecond[0].owner.login,
	        draw: false
        }
    } else if(starsFirst === starssecond) {
        return {
            winner: null,
            loser: null,
	        draw: true
        }
    } else {
        return {
            winner: repositoriesSecond[0].owner.login,
            loser: repositoriesfirst[0].owner.login,
	        draw: false
        }
    }
}   
    
export {
    dataUser,
    battleLog
}