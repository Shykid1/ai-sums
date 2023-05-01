import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

        <button type='button' onClick={() => window.open('https://github.com/shykid1')} className='black_btn'>Github</button>
      </nav>

      <h1 className="head_text">
        Summerize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OPenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with summize, an open-source article summerizer that transforms legthy articles into clear and concize summeries
      </h2>
    </header>
  )
}

export default Hero