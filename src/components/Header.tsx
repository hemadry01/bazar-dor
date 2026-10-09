
import Image from 'next/image';
import Logo from "@/assets/logo-icon.png"
import UserInfo from './UserInfo';
import Navbar from './Navbar';
import HeaderDate from './HeaderData';


const HeaderPage = () => {
  
    return (
      <div className="relative justify-center mt-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-2 max-w-6xl mx-auto">
            <div className="avatar">
              <div className="w-10 rounded">
                <Image src={Logo} alt="Logo" className="bg-green-600" />
              </div>
            </div>
            <div className="items-center justify-center mx-auto">
              <h2 className="text-2xl font-semibold">বাজার দর</h2>
              <HeaderDate/>
            </div>
          </div>
            <UserInfo/>
        </div>
        <Navbar />
      </div>
    );
};

export default HeaderPage;