import { Button } from "../components/ui/buttons";
import { Container } from "../components/ui/GenaralUi";

export function Example() {
  return (
    <>
      <Container className="rounded-lg bg-gray-200">
        <Button className="bg-gray-300 hover:bg-gray-400">show Button</Button>
      </Container>
      <Container className="bg-gray-200"></Container>
    </>
  );
}
