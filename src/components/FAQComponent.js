import CustomAccordion from 'src/components/CustomAccordion';
import faq from 'src/data/faq';

const FAQComponent = () => {
  const data = faq;

  return (
    <div>
      <div className="mb-12 desktop:mb-28">
        <div className="text-xl tablet:text-3xl desktop:text-5xl text-[#FFF] font-bold text-center pb-5">
          Frequently Asked Question
          <span className="text-xl tablet:text-3xl desktop:text-5xl text-[#D9BA6A] p-0">.</span>
        </div>
      </div>
      {data.map((v, i) => {
        return <CustomAccordion data={v} key={i} />;
      })}
    </div>
  );
};

export default FAQComponent;
