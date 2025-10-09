import { useEffect, useState } from "react"

const useTrendingApps = () => {
    const [trendingApps, setTrendingApps] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('/trendingapps.json')
        .then(res => res.json())
        .then(data => {
            setTrendingApps(data)
            setLoader(false)
        })
    }, [])

    return {trendingApps, loader}
}

export default useTrendingApps