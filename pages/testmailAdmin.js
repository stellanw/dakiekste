import AdminEmail from "@/emails/AdminEmail";
export default function testmailAdmin() {
  return (
    <AdminEmail
      items={[{ qty: 1, title: "Fotografie", price: "500 ,-" }]}
      totalPrice="500 ,-"
      year={2025}
      preview
      name="Stellan Wetzig"
      pronouns="er/ihm"
      company="Dakiekste GbR"
      businessType="Unternehmen"
      acceptedTerms={true}
      messageHtml="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
    />
  );
}
