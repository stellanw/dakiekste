// pages/anknipsen.js
import AnknipsenForm from "@/components/AnknipsenForm";
import Footer from "@/components/Footer";

export default function AnknipsenPage() {
  return (
    <>
      <main>
        <AnknipsenForm eventKey="2025-12-17" eventLabel="17. Dezember 2025 ab 17 Uhr" />
        <Footer hideTitle />
      </main>
    </>
  );
}
