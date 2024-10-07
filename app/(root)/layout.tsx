import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn = {  $id: '001',
      userId: '001',
      dwollaCustomerUrl: '',
      dwollaCustomerId: '',
      address1: '',
      city: '',
      state: '',
      postalCode: '',
      dateOfBirth: '',
      ssn: '',
      firstName: 'FYT', lastName: 'FAN', email: 'fan@163.com'  };
    return (
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="icons/logo.svg" alt="menu" width={30} height={30} />
            <div>
              <MobileNavbar user={loggedIn} />
            </div>
          </div>
          {children}
        </div>
      </main>
    );
  }
  