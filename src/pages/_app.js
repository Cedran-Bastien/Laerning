import '@/styles/globals.css';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AppContextProvider } from '@/context/AppContext';

export default function MyApp({ Component, pageProps }) {
  const pathname = usePathname();
  const [tabs] = useState([
    { name: 'Learning', route: 'learn' },
    { name: 'Test your skill', route: 'test' },
  ]);
  const [value, setValue] = useState(tabs.map((item) => item.route).indexOf(pathname.split('/')[1]));

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
