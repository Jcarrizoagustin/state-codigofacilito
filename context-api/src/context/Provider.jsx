import { UserContext } from "./UserContext";

const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={{
            isLoading:false,
            userData:{
                username:'',
                password:''
            }
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider