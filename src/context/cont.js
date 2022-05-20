import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [link, setLink] = useState('/')
  const [phone, setPhone] = useState(false)
  const [data, setData] = useState(false)
  const [data1, setData1] = useState(false)
  const [data2, setData2] = useState(false)
  const [data3, setData3] = useState(false)
  const [data4, setData4] = useState(false)
  const [projectType, setProjectType] = useState('')

  let sharedState = {
    projectType,
    setProjectType,
    link,
    setLink,
    phone,
    setPhone,
    data,
    setData,
    data1,
    setData1,
    data2,
    setData2,
    data3,
    setData3,
    data4,
    setData4,
  }

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
