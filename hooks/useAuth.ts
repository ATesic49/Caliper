import axios from "axios"

const useAuth = () => {
  const singIn = async () => {
    try {
      await axios.get("/api/logInRegister/logIn")
    } catch (e) {}
  }
  const singUp = async () => {
    await axios.get("/api/logInRegister/register")
  }
}

export default useAuth
