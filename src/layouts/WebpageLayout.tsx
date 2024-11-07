import Footer from "../components/Footer";
import Keunggulan from "../components/Keunggulan";
import Layanan from "../components/Layanan";
import Navbar from "../components/Navbar";

type WebpageLayout = {
  page: any;
};

export default function WebpageLayout({ page }: WebpageLayout) {
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-28">{page}</div>
      <Layanan />
      <Keunggulan />
      <Footer />
    </>
  );
}
