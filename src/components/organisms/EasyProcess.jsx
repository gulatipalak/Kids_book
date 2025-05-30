import SectionHeading from '../atoms/SectionHeading'
import ProcessCards from '../molecules/ProcessCards'
import book from "../../assets/img/book.png"

const data = [
    {
        heading: "Share Your Story",
        description: "Fill in our easy-to-follow form, providing us with your loved one's name, their traits, and a cherished real-life experience or dream adventure you'd like the story to be based on."
    },
    {
        heading: "Share Your Story",
        description: "Fill in our easy-to-follow form, providing us with your loved one's name, their traits, and a cherished real-life experience or dream adventure you'd like the story to be based on."
    },
    {
        heading: "Share Your Story",
        description: "Fill in our easy-to-follow form, providing us with your loved one's name, their traits, and a cherished real-life experience or dream adventure you'd like the story to be based on."
    }
]

const EasyProcess = () => {
  return (
    <section  className="bg-no-repeat bg-cover bg-top" style={{backgroundImage: "url('../src/assets/img/bg-cloud.png')"}}>
        <div className="container">
          <div className='flex justify-center mt-[-10%]'>
        <img src={book} alt="book" />
      </div> 
        <SectionHeading text="Easy 3-Step Process" color='text-brand-black text-center'className="pb-[94px]"/>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-12 lg:gap-7">
          {data.map((item, index)=> {
          return (
            <ProcessCards key={item+index} count={index + 1} heading={item.heading} description={item.description}/>
          )
        })}
        </div>
      </div>
    </section>
  )
}

export default EasyProcess
