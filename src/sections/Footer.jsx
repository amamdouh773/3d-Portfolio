const Footer = () => {
  return (
    <footer className='flex flex-wrap justify-between items-center gap-5 pt-7 pb-3 border-t border-black-300 c-space'>
      <div className='flex gap-2 text-white-500'>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className='flex gap-3'>
        <div className='social-icon'>
          <a
            className='flex justify-center items-center no-underline'
            target='_blanck'
            href='https://github.com/amamdouh773'
          >
            <img
              src='/assets/github.svg'
              alt='github'
              className='w-1/2 h-1/2'
            />
          </a>
        </div>
        <div className='social-icon'>
          <a
            className='flex justify-center items-center no-underline'
            href='https://www.facebook.com/share/Qy2PjgZZZhUEg8p6/?mibextid=wwXIfr'
            target='_blank'
          >
            <img
              src='/assets/facebook.svg'
              alt='facebook'
              className='w-1/2 h-1/2'
            />
          </a>
        </div>
        <div className='social-icon'>
          <a
            className='flex justify-center items-center no-underline'
            href='https://www.linkedin.com/in/ahmed-mamdouh-847139209/'
            target='_blank'
          >
            <img
              src='/assets/linkedin.svg'
              alt='linkedin'
              className='w-1/2 h-1/2'
            />
          </a>
        </div>
      </div>

      <p className='text-white-500'>
        © 2024 Ahmed Mamdouh. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
