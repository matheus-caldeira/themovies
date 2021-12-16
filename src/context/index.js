import React from 'react'

import { AuthProvider } from './auth'
import { ThemeProvider } from './theme'

function Context({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AuthProvider>
  )
}

export default Context;