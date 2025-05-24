import Button from "../atoms/Button";
import NumberBadge from "../atoms/NumberBadge";
import SectionHeading from "../atoms/SectionHeading";

const data = [
  {
    heading: "Story Development:",
    points: ["We craft an exclusive 400-word story for your child.", "Inspired by the unique information you provide about them."]
  },
  {
    heading: "Character Designs:",
    points: ["Our artists create unique character designs based on your child's likeness and personality"]
  },
  {
    heading: "Illustrations:",
    points: ["We bring the story to life with 8 custom illustrations, capturing the adventures of your child."]
  },
  {
    heading: "Delivered in either e-book or paperback format",
    points: []
  }
];

const IncludedInBook = () => {
  return (
    <section className="bg-primary pb-[80px] pt-[62px]">
      <div className="container">
        <div className='flex flex-wrap justify-between items-start pb-[55px] gap-6'>
          <SectionHeading text="What is Included in Your Book?" className="max-w-[582px] leading-[1.08]" />
          <Button variant='primary'>Create Book</Button>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          {data.map((item, index) => (
            <div key={index} className='flex gap-6'>
              <NumberBadge count={index + 1} size={64}/>
              <div>
                <h3 className='font-poppins text-white text-[22px] font-medium my-3'>{item.heading}</h3>
                <ul className='list-disc ml-5'>
                  {item.points.map((point, i) => (
                    <li key={i} className='font-poppins font-normal text-brand-white text-lg'>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedInBook;
