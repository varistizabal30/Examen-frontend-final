import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({children}) =>{

    const value ={

    }

    return(<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>)
}


