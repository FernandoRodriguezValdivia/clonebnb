import Baselayout from '@/components/layouts/base-layout'
import './globals.css'

export const metadata = {
  title: 'CloneBnB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
        
        <Baselayout>
        
        {children}
        </Baselayout>
        
        
      
      
      </body>
    </html>
  )
}
