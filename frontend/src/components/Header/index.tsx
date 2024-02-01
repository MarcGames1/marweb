import HeaderMenu from './HeaderComponents/HeaderMenu';


const Header = () => {
 

  
  
  //  break-keep whitespace-nowrap



  return (
    <div className="z-50 break-keep whitespace-nowrap ">
      <div className="container">
        {/* Header menu start  */}
       <HeaderMenu />
        {/* Header menu End  */}
      </div>
    </div>
  );
};

export default Header;
