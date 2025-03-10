import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types'

const initialState = {
    token: null,
    setToken: () => { },
}

export const AuthContext = createContext(initialState)

export function AuthContextProvider({ children }) {
    const [token, setToken] = useState(null)
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.element.isRequired
}

export const useAuth = () => {
    const { token, setToken } = useContext(AuthContext)
    return [token, setToken]
}