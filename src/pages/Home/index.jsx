import { useEffect, useState } from 'react'
import api from './../../services/api'
function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "d30221b61194d23fbc7c1d51d99d35c4",
                    languagem: "pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results)
        }
        loadFilmes();
    }, [])

    return (
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;