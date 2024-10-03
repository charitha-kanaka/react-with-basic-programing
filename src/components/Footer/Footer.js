//Functional Component with Anonymous Function

import MenuList from "../MenuList/MenuList";



const Footer= function(){
    const copyrightYear="2023";
    const developerName="charitha";
    return (
   <footer className="text-center">
    <hr />
    <MenuList />
    <p>copyright {copyrightYear} | {developerName}</p>
    </footer>
    );
}
export default Footer;