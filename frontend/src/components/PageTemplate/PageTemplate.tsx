import Container from "../Container";
import Header from "../Header";

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default PageTemplate;
