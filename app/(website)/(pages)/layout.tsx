// import { kanit } from "../../fonts";
import Header from "@/components/modules/header";
import "../../globals.css";
import Footer from "@/components/modules/footer";
import MobileButtom from "@/components/custom/MobileButtom";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <MobileButtom />
            {children}
            <Footer />
        </>
  );
}
