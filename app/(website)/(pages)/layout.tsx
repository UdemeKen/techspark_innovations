// import { kanit } from "../../fonts";
import Header from "@/components/modules/header";
import "../../globals.css";
import MobileButton from "@/components/custom/MobileButton";
import Footer from "@/components/modules/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>p
            <Header />
            <MobileButton />
            {children}
            <Footer />
        </>
  );
}
