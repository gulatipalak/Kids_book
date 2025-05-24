import Button from "../atoms/Button"
import SectionHeading from "../atoms/SectionHeading"

const WhyWeStarted = () => {
  return (
    <section className='bg-primary py-[81px]'>
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-[40%] shrink-0 flex justify-center lg:block">
                    <img src="../src/assets/img/dummy-1.png" alt="image"/>
                </div>
                <div className="lg:w-[60%]">
                    <SectionHeading text="Why we started Once Upon My Story?" className="pb-11 leading-[1.08] lg:mt-[26px]"/>
                    <p className='font-poppins font-normal text-lg text-brand-white'>
                        Our journey started with a simple wish: to create something truly personal for the little ones. Other companies only offered basic name customizations, with no real connection to real-life experiences. So, we decided to take matters into our own hands.</p>
                    <p className='font-poppins font-normal text-lg text-brand-white'>We mastered tools like Photoshop, Canva, DALL-E and Amazon KDP to craft fully personalized, heartfelt stories that bring your loved one's unique adventures to life.</p>
                    <p className='font-poppins font-normal text-lg text-brand-white'>Once Upon My Story's mission is simple: to help you gift your loved one a truly one-of-a-kind story at a fair price.</p>
                    <Button variant='primary' className='mt-[34px]'>Create Book</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyWeStarted
