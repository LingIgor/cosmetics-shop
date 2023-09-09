
import Header from "../Header/Header";
import HorizontalMenu from "../HorizontalMenu/HorizontalMenu";
import UnderHeader from "../underHeader/underHeader";

export const AppBar = ({handleLogin}) => { 

 
    return (
     <div>
        <Header/>
        <UnderHeader handleLogin={handleLogin}/>
        <HorizontalMenu/>

     </div>
    );
  };