import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider as StyledProvider } from 'styled-components';

import themes from '../themes';

const KEY_THEME = "@RN:THEMOVIES:theme"

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = useCallback(() => {
    setTheme(state => {
      const type = state.title === 'light' ? 'dark' : 'light';
      return themes[type];
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(KEY_THEME, theme.title);
  }, [theme]);

  useEffect(() => {
    async function loadStorageData() {
      const storageTheme = await AsyncStorage.getItem(KEY_THEME);

      if (storageTheme) {
        setTheme(themes[storageTheme] || themes.light)
      }
    }

    loadStorageData();
  }, []);

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}

export { useTheme, ThemeProvider };