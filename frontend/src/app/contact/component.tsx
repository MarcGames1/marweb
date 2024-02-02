import About1 from '@/components/About/about1';
import ClientSlider from '@/components/ClientSlidet/ClientSlider';
import ContactForm from '@/components/ContactForm/ContactForm';
import Container from '@/components/Container';
import Address from '@/components/contact/Address';
import Service from '@/components/service/Service';


const ContactComponent = () => {
  return (
    <Container>
      {/* Start top about info */}
      <div className="py-12 px-5">
        <h2 className="after-effect after:left-60 mt-12 lg:mt-0 ">Contact</h2>
      </div>
      <div className="lg:flex gap-x-20">
        {/* End contact address block */}
        <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6">
          <Address />
        </div>
        {/* End contact address block */}

        {/* Start contact form */}
        <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
          <ContactForm />
        </div>
        {/* End contact form */}
      </div>
    </Container>
  );
}

export default ContactComponent