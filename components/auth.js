// auth.js

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase.config';

const auth = getAuth(app);

export async function CreateUserWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function SignInWithEmailAndPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function SignOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
