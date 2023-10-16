import './globals.css'

export const metadata = {
  title: 'CloneBnB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
