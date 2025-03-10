import './App.scss'
import Form from './components/Form/Form'
import Hero from './components/Hero/Hero'
import Price from './components/Price/Price'

function App() {

  return (
    <>
    <main>
      <Hero />
      <section className='trial'>
        <Price />
        <Form /> 
      </section>
    </main>
    </>
  )
}

export default App
