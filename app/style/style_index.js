import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const dynamicMargin = height * 0.2;

print("height",height)
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {
    marginBottom: dynamicMargin*0.4,
    marginTop: dynamicMargin
  },
  logo2: {
    width: 170,
    height: 50,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 10,
    marginBottom: dynamicMargin*0.4,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
  },
  googleButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: dynamicMargin*0.4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  agreementText: {
    textAlign: 'center',
    marginTop: dynamicMargin*0.4,
    marginHorizontal: 30,
    color: 'white',
  },
  hyperlink: {
    color: 'blue',
  },
});

