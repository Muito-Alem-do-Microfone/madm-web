const basePath = 'http://localhost:8080/api'


export const loginAPI = async (user, password) => {
  console.log(user, password)
  const body = {
    email: user,
    password: password
  }

  try {
    const response = await fetch(`${basePath}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    if (!response.ok) {
      throw new Error('Login failed: ' + response)
    }
    return response.json()
  } catch (error) {
    throw new Error('Login failed: ' + error)
  }
};

export const registerAPI = async (name, email, password) => {

  const body = {
    name: name,
    surname: '',
    username: name,
    email: email,
    password: password
  }

  try {
    const response = await fetch(`${basePath}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    if (!response.ok) {
      throw new Error('Registration failed: ' + response)
    }
    return response.json()
  } catch (error) {
    throw new Error('Registration failed: ' + error)
  }
};