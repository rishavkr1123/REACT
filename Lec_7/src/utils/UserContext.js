
import {createContext } from 'react'



const UserContext = createContext({
    user:{name: "rishav",
    email: "rishav@gmail.com"}
})
UserContext.displayName = "UserContext"

export default UserContext