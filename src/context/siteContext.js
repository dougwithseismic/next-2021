import React, { createContext } from 'react'
import { supabase } from '@utility/initSupabase'
// Describe SiteContext.
/* 
Features:
  Catch-all for hooks and context
*/

const defaultState = {}

const SiteContext = createContext(defaultState)

const SiteProvider = (props) => {
  const { children } = props

  return (
    <SiteContext.Provider
      value={{
        supabase,
        testFunction: () => {
          return 'test'
        },
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
export { SiteProvider }
