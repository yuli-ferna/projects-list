import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="text-[22px] text-left text-black">
        <p className='mb-4'>
          <span>
            Built with Vite
          </span>
          <br />
          <span>
            Styled with TailwindCSS
          </span>
          <br />
          <span>
            Icons from&nbsp;Streamlinehq.com&nbsp;
          </span>
          <br />
          <span>
            licensed under CC BY 4.0
          </span>
        </p>
        <p>
          © 2025 Projects & Demos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer