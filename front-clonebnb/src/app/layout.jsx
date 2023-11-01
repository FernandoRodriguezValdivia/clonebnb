import { NavBar } from '@/components/menu/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { HousingProvider } from '@/context/HousingProvider';
import Providers from '@/components/providers/Providers';
import { FilterProvider } from '@/context/FilterProvider';
import { ReserveProvider } from '@/context/ReserveProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clonebnb',
  description: 'The starting point for your perfect trip.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center">
          <NavBar />
        </header>
        <ReserveProvider>
          <FilterProvider>
              <HousingProvider>
                <Providers>{children}</Providers>
              </HousingProvider>
          </FilterProvider>
        </ReserveProvider>
      </body>
    </html>
  );
}
