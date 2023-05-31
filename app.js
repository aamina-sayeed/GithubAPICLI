import axios from "axios"
import readline from "readline-sync"

//let ask=readline.question("Enter name:")
//console.log(ask)

let data=axios.get("http://124.123.41.139/")


data.then((response)=>{
    //To get email
    // for(let i of response.data){
    //     console.log(i.email)
    // }
    // console.log(response.data[0].email)
    //To get even answers
    for( let i of response.data){
        if(i.id%2==0){
        console.log(i)
        }
    }
}).catch((e)=>{"I am error"})