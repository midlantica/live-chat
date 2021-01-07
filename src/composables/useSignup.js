import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null);

const signUp = async (email, password, displayName) => {
  error.value = null

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete sign up :(')
    }
    await res.user.updateProfile({ displayName })
    error.value = null

    return res

    console.log(res.user);
  } catch (err) {
    console.log(error.message);
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signUp }
}

export default useSignup
