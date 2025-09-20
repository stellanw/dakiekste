import CustomerEmail from "@/emails/CustomerEmail";

export default function testmail() {
  return (
    <CustomerEmail
      items={[
        { qty: 1, title: "Fotografie", price: "500 ,-" },
        { qty: 1, title: "Fotografie", price: "500 ,-" },
        { qty: 1, title: "Fotografie", price: "500 ,-" },
        { qty: 1, title: "Fotografie", price: "500 ,-" },
        { qty: 1, title: "Fotografie", price: "500 ,-" },
        { qty: 1, title: "Fotografie", price: "500 ,-" },
        { qty: 1, title: "Fotografie", price: "500 ,-" },
        { qty: 1, title: "Fotografie", price: "500 ,-" },
      ]}
      totalPrice="500 ,-"
      year={2025}
      preview
      name="Max Mustermann"
      messageHtml="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
      previewText="Neue Anfrage (Test)"
      sourceLabel="eingegangen über das Kontaktformular"
      logoCid={undefined}
    />
  );
}
