import '@/styles/globals.css'
import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useColorMode from '@/hooks/useColorMode';

export default function App({ Component, pageProps }) {
  // const [isDarkMode, setDarkMode] = useState(false);
  // const [colorMode, setColorMode] = useColorMode();

  // const toggleDarkMode = (checked) => {
  //   setDarkMode(checked);
  //   setColorMode(colorMode === 'light' ? 'dark' : 'light');
  // };

  // useEffect(() => {
  //   setDarkMode(colorMode === 'light' ? false : true);
  // }, [isDarkMode]);

  return (
    <main>
      <Component {...pageProps} />
      {/* <div className="p-1 w-8 h-8 fixed bottom-3 right-3 rounded bg-zinc-300 hover:bg-zinc-400 transition ease-in duration-200">
        <DarkModeSwitch
          className='w-6 h-6'
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={120}
        />
      </div> */}
    </main>
  )
}