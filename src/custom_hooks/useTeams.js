const { useState, useEffect } = require("react")

const useTeams = (userId) => {
    const[teams, setTeams] = useState([])

    useEffect(() => {
        const loadTeams = async (userId) => {
            const response = await fetch('/api/team?userId=' + userId)
            const data = await response.json()
            setTeams(data)
        }
        loadTeams(userId)
    }, [])
    return { teams }
}