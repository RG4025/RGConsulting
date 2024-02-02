import Firstsection from "./Firstsection"
import Secondsection from "./Secondsection"
import Thirdsection from "./Thirdsection"
import Foursection from "./Foursection"
import Fivesection from "./Fivesection"
import Navbar from "../Navbar"


export default function MainHome(){

    
  // services array
  const serviceArr = [
    {
      title:'SERVICES',
      body:"loremI'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      btn_href:"#"
    },
    {
      title:'PROJECTS',
      body:"loremI'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      btn_href:"#"
    },
    {
      title:'CLIENTS',
      body:"loremI'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      btn_href:"#"
    }
  ]


  // our service array

  const logo_image = [
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFwMMKNQ0G58HspJmHdFdGGOu3Rz819VV4M3DQ2R7OOe69Nz_s',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_8Nea8UpimKWidhlsdxGxdvw1a_QHdj4a0MminoO6tXmdvSjZ',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgs7lf7FmCj0L9h88qUDaXFbFepjPYCaiuMRLXDi3hwJmMGznG',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeBezo-L4BKzrUyX_Pt7HCd6_C_UEidIUhsRUmQK2UDzmV1Rtf'
  ]

    return(
        <>
        {/* navbar componant */}
     <Navbar/>
      {/* first section */}
      <Firstsection/>


      {/* section second */}
      <Secondsection setData={serviceArr}/>

      {/* third section */}
      <Thirdsection/>

      {/* fourth section */}
      <Foursection setImage={logo_image}/>

      {/* five section */}
      <Fivesection/>


        </>
    );
};