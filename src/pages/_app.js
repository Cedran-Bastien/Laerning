import '@/styles/globals.css';
import { usePathname } from 'next/navigation';
import { AppContextProvider } from '@/context/AppContext';
import DashboardLayout from '@/components/layout';

export default function MyApp({ Component, pageProps }) {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard/')) {
    return (
      <DashboardLayout>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </DashboardLayout>
    );
  }

  return (
    <>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}
