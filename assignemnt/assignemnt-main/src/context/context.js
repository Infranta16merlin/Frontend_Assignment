
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = ' https://panorbit.in/api/users.json'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const fetchData = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`);
      console.log(response);
      const data = await response.json()
      console.log(data);
      if (data) {
        const newData = data?.users?.map((item) => {
          const {
            id,
            name,
            profilepicture,
          } = item

          return {
            id: id,
            name: name,
            image: profilepicture,
          }
        })
        console.log(newData);
        setUsers(newData)
      } else {
        setUsers([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[])
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <AppContext.Provider
      value={{ loading, users}}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }