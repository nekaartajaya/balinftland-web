import ImageDescComponent from "../../src/components/ImageDescComponent";


const AboutSection = () => {
  return (
    <section style={{padding:'40px 0'}}>
      <ImageDescComponent 
        imageUrl="/image1.svg"
        imageAlt="Tes"
        title="Digilandbali, NFT Developer Property"
        description="Digiland Bali consists of 3 entities, Blockchain Consultant Experts who have handled various projects for 15 years, One of Bali's top property developer with 20+ years experience who has built hotels and resorts like Agra Nusa Villas, The Nest in Benoa The Sapphire Cliff Resort and Umalas Signature, and the property will be maintained by world's top hospitality management with 25+ years experience."
      />
      <ImageDescComponent 
        imageUrl="/image2.svg"
        imageAlt="Tes"
        title={"We Build Together,\nWe Own Together"}
        description="Digilandbali is on a mission to make everyone become a property developer where everyone can get a property with a developer price instead of market selling price because the property project was built together. "
      />
    </section>
  );
};

export default AboutSection;