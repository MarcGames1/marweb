import { Loader } from "@/components";
import Header from "@/components/Header";
import Container from '@/components/Container';
export default function DefaultLoader() {
  // You can add any UI inside Loading, including a Skeleton.
  return <>

  <Header />
  <Container>
  <Loader />
  </Container> </>
}