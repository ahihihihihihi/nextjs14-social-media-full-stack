
import Navbar from '@/components/navbar/Navbar'
import LeftBar from '@/components/leftBar/LeftBar'
import RightBar from '@/components/rightBar/RightBar'
import '@/app/style.scss'
import ThemeProvider from '@/context/ThemeProvider'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function UserLayout({ children }) {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            {children}
          </div>
          <RightBar />
        </div>
      </ThemeProvider>
    </>
  )
}