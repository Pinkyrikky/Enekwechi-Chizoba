import React from 'react'
import '../../assets/css/about/About.css'
import CountUp from 'react-countup';
import 'animate.css';



export default function AboutUs() {
  return (
    <>
        <h2 className='About'>About Us</h2>
        <div className='AboutUs'>
            <div className='happyClient aboutMe animate__animated animate__fadeInUp animate__faster'>

            
                <div>
                    <h1><CountUp
  start={0}
  end={1}
  duration={2.75}
  separator=" "
  decimals={3}
  decimal=","
 
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
     
    </div>
  )}
</CountUp></h1>
                    <p>Happy Clients</p>
                </div>
                <div>
                    <h1>
                    <CountUp
  start={0}
  end={2}
  duration={2.75}
  separator=" "
  decimals={2}
  decimal=""
 
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
     
    </div>
  )}
</CountUp>
                    </h1>
                    <p>Projects Done</p>
                </div>
                <div>
                    <h1>
                    <CountUp
  start={0}
  end={5}
  duration={2.75}
  separator=" "
  decimals={2}
  decimal=""
 
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
     
    </div>
  )}
</CountUp>
                    </h1>
                    <p>Cups Of Coffee </p>
                </div>
                <div>
                    <h1>
                    <CountUp
  start={0}
  end={5.87}
  duration={2.75}
  separator=" "
  decimals={2}
  decimal=""
 
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
     
    </div>
  )}
</CountUp>
                    </h1>
                    <p>Working Hours</p>
                </div>
            </div>
            <div className='aboutMe animate__animated animate__fadeInUp animate__delay-0.5s'>
                <h4>ABOUT ME</h4>
                <h1>A Web  Designer & Developer Based In Nigeria</h1>
                <p>I am a Web Designer.  I specialize in Javascript, typescript, react and Nextjs. </p>
                <div className='info'>
                    <div><p>Name:</p><span>Chizoba Chukwunaza Enekwechi</span></div>
                    <div><p>Date of Birth:</p><span>29 January, 1999</span></div>
                    <div><p>Address:</p><span>49 Umushi Street,  Awka, Anambra State</span></div>
                    <div><p>Zip Code:</p><span>45789</span></div>
                    <div><p>Email:</p><span>rikkypinky20@gmail.com</span></div>
                    <div><p>Phone:</p><span>07080786147</span></div>
                </div>
                <button className='black'>Download CV</button>
            </div>
        </div>
    </>
  )
}
