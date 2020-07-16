import React,{ useEffect, useState } from 'react';
import './App.css';
import Header from './header.js';
import TopCards from './top-cards.js';
import Overview from './overview.js';
import Switch from './switch.js';

const App = () => {
  
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'


  const changeMedia = (mq) => {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCards/>
      <Overview/>
    </main>
  );
}

export default App;
