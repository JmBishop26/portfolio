'use server'
import Cookies from 'js-cookie';

export async function setTheme(value){
    Cookies.set("jmIsDark", value, { expires: 7 })
}

