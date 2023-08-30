import './App.css'
import ThemeProvider from './contect/ThemeContect'
import PageRoute from './routes/PageRoute'

function App() {
 
  return (
    <>
    <ThemeProvider>
      
    <PageRoute/>
    </ThemeProvider>
    </>
  )
}

export default App
