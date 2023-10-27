import { useCookies } from "react-cookie"

export const useAuth = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['auth'])

    cookies.auth == false && window.location.pathname('/login')

    return {
        cookies, setCookie, removeCookie,
        isAuth: true,
    }
}