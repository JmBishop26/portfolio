import { RiNetflixFill, RiSpotifyFill,  } from 'react-icons/ri'
import { FaBasketballBall, FaTableTennis } from 'react-icons/fa'
import { SiRiotgames } from 'react-icons/si'
import styles from '../styles/About.module.scss'

export const myInterests = [
    {
        id: 1,
        name: 'Gaming',
        icon: <SiRiotgames style={{ color: '#DB1515' }}/>,
    },

    {
        id: 2,
        name: 'Movies',
        icon: <RiNetflixFill style={{ color: '#E50914' }}/>,
    },

    {
        id: 3,
        name: 'Music',
        icon: <RiSpotifyFill style={{ color: '#1DB954' }}/>,
    },

    {
        id: 4,
        name: 'Table Tennis',
        icon: <FaTableTennis style={{ color: '#1100c6' }}/>,
    },

    {
        id: 5,
        name: 'Basketball',
        icon: <FaBasketballBall style={{ color: 'orangered' }}/>,
    }





]