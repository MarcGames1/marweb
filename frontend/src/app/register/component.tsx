import Container from '@/components/Container';
import RegisterForm from './RegisterForm';


const ContactComponent = () => {
  return (
    <Container>
      {/* Start top about info */}
      <div className="py-12 px-5">
        <h2 className="after-effect after:left-60 mt-12 lg:mt-0 ">
          Inregistrare
        </h2>
      </div>
      <div className="mx-10 lg:mx-auto lg:w-1/4  ">
        <RegisterForm />
      </div>
    </Container>
  );
}

export default ContactComponent