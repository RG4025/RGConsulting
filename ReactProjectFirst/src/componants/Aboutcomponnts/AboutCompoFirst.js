import FirstAbout from "./FirstAbout";
import SecondAbout from "./SecondAbout";

export default function AboutCompoFirst(){

    const ourTeam =[
        {
            imgUrl:'https://static.wixstatic.com/media/82fcd3_7a731101632e415bb8ab1f5a49c6145c~mv2.jpg/v1/crop/x_0,y_46,w_4278,h_3672/fill/w_555,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1181852767_CROP.jpg',
            name:'DOMINICK JAMES',
            post:'Founder and Principal',
            para:"Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        },
        {
            imgUrl:'https://static.wixstatic.com/media/82fcd3_0e0ea1cfa3ec48e6993da72737082cac~mv2.jpg/v1/crop/x_0,y_155,w_1997,h_1716/fill/w_555,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1180037222_CROP.jpg',
            name:'GRACE RIOS',
            post:'Project Manager',
            para:"Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        },
        {
            imgUrl:'https://static.wixstatic.com/media/82fcd3_d5c1bcb10d674b44a5eecc753ffe4402~mv2.jpg/v1/crop/x_0,y_217,w_2863,h_2463/fill/w_555,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1097995030_CROP.jpg',
            name:'KIM BAILEY',
            post:'VP Marketing',
            para:"Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        },
        {
            imgUrl:'https://static.wixstatic.com/media/82fcd3_b2d1feab6b884d71b13465b3d7265669~mv2.jpg/v1/crop/x_0,y_208,w_2261,h_1943/fill/w_555,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1180037247_CROP.jpg',
            name:'TREVOR SINCLAIR',
            post:'Vo Accounts',
            para:"Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        },
        {
            imgUrl:'https://static.wixstatic.com/media/82fcd3_7a731101632e415bb8ab1f5a49c6145c~mv2.jpg/v1/crop/x_0,y_46,w_4278,h_3672/fill/w_555,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1181852767_CROP.jpg',
            name:'DOMINICK JAMES',
            post:'Founder and Principal',
            para:"Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        },
        {
            imgUrl:'https://static.wixstatic.com/media/82fcd3_0e0ea1cfa3ec48e6993da72737082cac~mv2.jpg/v1/crop/x_0,y_155,w_1997,h_1716/fill/w_555,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1180037222_CROP.jpg',
            name:'GRACE RIOS',
            post:'Project Manager',
            para:"Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        }
    ]

    return(
        <>  

        

       {/* First componant of the about section */}
       <FirstAbout/>
        

       {/* second componant of the about section */}
        <SecondAbout setData={ourTeam}/>


        </>
    );
};