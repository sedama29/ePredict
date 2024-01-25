import { GoogleSignin } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
  androidClientId: '591454203526-fcil5gkg6hn6h6nnrrbkojmopk2jof00.apps.googleusercontent.com',
  webClientId: '591454203526-gnjttnc4drp063ttv459ldplrca4hfag.apps.googleusercontent.com',
});

export const signInWithGoogle = async () => {
  try {

    // await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin[Platform.OS === 'android' ? 'signIn' : 'signInSilently']();
    console.log('User Info:', userInfo);
    await GoogleSignin.revokeAccess();
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
};