import { createContext, useContext, useEffect, useState } from 'react'
import supabase from '../config/supabase'
import PropTypes from 'prop-types'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    let { data: profile, error } = await supabase
      .rpc('get_user_profile', { profile_id: user.id })

    setAuthUser(profile)
    setLoading(false)
  }

  const login = async (email, password) => {
    try {
      const { data: { user } } = await supabase.auth.signInWithPassword({ email, password })
      
      let { data: profile, error } = await supabase
        .from('profiles')
        .select("*")
        .eq('id', user.id)

      setAuthUser(profile)

      if (error) {
        throw error
      }
    } catch (error) {
      console.error(error)
    }
  }

  const register = async (email, password) => {
    const { data: { user }, error } = await supabase.auth.signUp({ email, password })
    if (error) {
      console.error('Registration error:', error.message)
    } else {
      setAuthUser(user)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setAuthUser(null)
  }

  return (
    <AuthContext.Provider value={{ authUser, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAuth = () => useContext(AuthContext)
