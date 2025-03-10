import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { login } from "@/api/users.js";

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [, setToken] = useAuth()
    const navigate = useNavigate()

    const loginMutation = useMutation({
        mutationFn: () => login({ username, password }),
        onSuccess: (data) => {
            setToken(data.token)
            navigate('/')
        },
        onError: () => alert('failed to login!')
    })

    const handleSumbit = (e) => {
        e.preventDefault()
        loginMutation.mutate()
    }

    return (
        <form onSubmit={handleSumbit}>
            <Link to='/'>Back to main page</Link>
            <hr />
            <br />
            <div>
                <label htmlFor='create-username'> Username: </label>
                <input
                    type='text'
                    name='create-username'
                    id='create-username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label htmlFor='create-password'>Password: </label>
                <input
                    type='password'
                    name='create-password'
                    id='create-password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br />
            <input
                type='submit'
                value={loginMutation.isPending ? 'Logging in...' : 'Log In'}
                disabled={!username || !password || loginMutation.isPending}
            />
        </form>
    )
}