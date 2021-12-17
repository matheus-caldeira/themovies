import React, {
  createContext,
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import * as Linking from 'expo-linking'
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import Authenticate from '../services/Authenticate';
import Account from '../services/Account'

const KEY_USER = "@RN:THEMOVIES:user"
const KEY_TOKEN = "@RN:THEMOVIES:token"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const token = useRef('');

  useEffect(() => {
    async function loadStorageData() {
      const data = await AsyncStorage.multiGet([
        KEY_USER,
        KEY_TOKEN,
      ]);
      const storageUser = data[0][1];
      const storageToken = data[1][1];

      if (storageToken && storageUser) {
        api.defaults.params.session_id = storageToken;
        
        const userParsed = JSON.parse(storageUser)
        setUser(userParsed);
        api.defaults.params.account_id = userParsed.id;

        try {
          const data = await Account.getDetails();
          setUser(data);
        } catch {
          //
        }
      }
    }

    loadStorageData();
  }, []);

  const generateToken = useCallback(async () => {
    const callback = 'exp://192.168.149.251:19000/--/app/approved'
    token.current = await Authenticate.createToken();
    Linking.openURL(`https://www.themoviedb.org/authenticate/${token.current}?redirect_to=${callback}`);
  }, [])

  const singIn = useCallback(async () => {
    const session_id = await Authenticate.signIn(token.current)

    api.defaults.params.session_id = session_id;
    token.current = '';

    const userData = await Account.getDetails();
    api.defaults.params.account_id = userData.id;

    setUser(userData);
    await AsyncStorage.setItem(KEY_USER, JSON.stringify(userData));
    await AsyncStorage.setItem(
      KEY_TOKEN,
      session_id,
    );
  }, []);

  const singOut = useCallback(async () => {
    Authenticate.signOut();
    AsyncStorage.multiRemove([KEY_USER, KEY_TOKEN]);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        singIn,
        singOut,
        generateToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
