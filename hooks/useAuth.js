import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";

export default function useAuth() {
    const [user, setUser] = useState('')
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user.email + ' đã đăng nhập');
            } else {
                setUser('')
                console.log('Chưa đăng nhập');
            }
        })
        return unsub
    }, [])

    return { user }

}