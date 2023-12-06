import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { AppContextProvider } from "@/context/AppContext";
import DashboardLayout from "@/components/layout";
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  const pathname = usePathname();

  if (pathname.startsWith("/dashboard/")) {
    return (
      <AppContextProvider>
        <DashboardLayout>
            <Component {...pageProps} />
        </DashboardLayout>
      </AppContextProvider>
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
