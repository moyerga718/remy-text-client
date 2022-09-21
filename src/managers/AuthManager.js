export const loginUser = (user) => {
    return fetch("https://remy-text-adventure.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
  }
  
  export const registerUser = (user) => {
    return fetch("https://remy-text-adventure.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
  }