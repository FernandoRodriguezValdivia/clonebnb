'use client'
import { createContext} from "react"



export const ConfirmationContext = createContext()


export const ReservationProvider = ({children}) => {

const num = 'hola '
  return (



<ConfirmationContext.Provider value={{num}}>{children}</ConfirmationContext.Provider>
  )
}

