import { GoogleSignin } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
    androidClientId: '591454203526-fcil5gkg6hn6h6nnrrbkojmopk2jof00.apps.googleusercontent.com',
    webClientId: '591454203526-gnjttnc4drp063ttv459ldplrca4hfag.apps.googleusercontent.com',
  });

export const signInWithGoogle = async () => {
  try {
    const userInfo = await GoogleSignin[Platform.OS === 'android' ? 'signIn' : 'signInSilently']();
    await GoogleSignin.revokeAccess();
    return userInfo; 
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    throw error; 
  }
};

