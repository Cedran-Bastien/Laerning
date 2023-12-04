import '@/styles/globals.css';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppContextProvider } from '@/context/AppContext';

export default function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState(0);
  const [tabs] = useState([
    { name: 'Learning', route: 'learn' },
    { name: 'Test your skill', route: 'test' },
  ]);

  const router = useRouter();
  const handleChange = (event, newValue) => {
    router.push(tabs[newValue].route);
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs centered value={value} onChange={handleChange}>
            {tabs.map((item) => (
              <Tab key={item.name} label={item.name} />
            ))}
          </Tabs>
        </Box>
      </Box>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}
