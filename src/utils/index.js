import jwtDecode from 'jwt-decode'

export const isTokenValid = (token) => {
  if (!token) return false
  const parsedToken = JSON.parse(token)
  try {
    const decodedToken = jwt.verify(parsedToken, 'JWT_KEY="MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA00j7nlc/W+zTnKmudtPyt36b7dc09rvT12RuNqNNCNoPHpTXghSmgLJq5FmTxwkzAa7QGZDXqqJC7AgvsUDI26lWudbusLvQozLKyxGzrLjMT6pcjfTaE97TMS+3XJcTQGVN1GhHcAL+WmduG3K8g6KAacKbCcVchz335AuOHD9oOTQegiuP8wLf2nz56kVCbk49KQGdoXyQ64sYrl/twNHP9UOZAOAMM8MZWbT9P2GpBOHytxK0rh+Nj3QweVKbKwg1zm82rodAbL5O0NFmnNCFmrDZVpcR8fCOh4o1BTiRQqs8Q4t7SqtVxy41hxDov5oj8ZdLlKSi6hKnk+0oJ/0dtMPwBauxjVlCpUxnv0VLmYs14VQDHaETe80m3ecfJIPSj3k6sxkEaaRK/OzM2mw9D1s5iD2UfWIdsWdCzI1+bu9zEDVrNRbJv34fFSD0QptZeIN59oq1E3ttXOtZNEvAGC6e27ym5kdS56VSe3BHYhacGGVjziW8P3l9urvn8Aaib0jCtTwlV3ODauQ8fqdz8n/V61umQFCEeLGGxZLoaRawRBkHd9dvCs5z3pDNdGgMHnpkxGCQS/fDQFIUXEobwy72UrJqSfQFjoNzsoB+A33itLunPuleH4eb6tiLB0nX8utv5zV6cRbxwAzYvkxwTsHfIhWoF4bJMrlFZssCAwEAAQ==')
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}