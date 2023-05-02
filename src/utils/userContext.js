import { createContext } from "react";

const userContext = createContext({
user: {
    name: "Admin",
    email: "BigBites@admin.com",
    isAuthenticated : false
}
});

userContext.displayName = "userContext";



export default userContext;