import { addElement } from "./addElementpack";
import './style.css';
import pot from './pot.png';
import checkout from './checkout.png';
import confirm from './confirm.png';
import wanted from './wanted.png';
import Base from './text/Base.txt';
import Meat from './text/Meat.txt';
import Noodles from './text/Noodle.txt';
import Seafood from './text/Seafood.txt';
import Vegetable from './text/Vegetable.txt';
import Staff from './text/StaffInfo.txt';
import Inox from './inot.png';
import clayPot from './claypot.png';
import RoundPot from './roundpot.png';
const restaurant = (() =>{
    "use strict";
    const page = document.querySelector("#content");
    const Page = ()=>{
        _head();
        _bottomHome();   
    };
    const _head =()=>{
        let headPage = addElement("div",page,"head-page");
        let content = [["home",confirm],["menu",checkout],["pot",wanted]];
        for(let i of content){
            let newButton = addElement("div",headPage,`${i[0]}`);
            newButton.textContent = i[0].toUpperCase();
            _hoverImg(newButton,i[0],i[1]);
        }
    }
    const _hoverImg=(target,name,src)=>{
        target.addEventListener("mouseover",()=>{
            let image = addElement("img",target,`${name}-img`);
            image.src = src;
        })
        target.addEventListener("mouseout",()=>{
            let image = document.querySelector(`#${name}-img`);
            setTimeout(()=>{image.remove()},100);
        })
        target.addEventListener("click",()=>{
            _clearBottom();
            switch(name){
                case 'home':_bottomHome();
                            break;
                case 'menu':_bottomMenu();
                            break;
                case 'pot':_potMenu();
                            break;
            }  
        })
    }
    const _bottomHome=() =>{
        let bottomPage = addElement("div",page,"bottom-page");
        let imgContent = addElement("img",bottomPage,"image-pot");
        imgContent.src = pot;
        let leftContent = addElement("div",bottomPage,"bottom-content");
        leftContent.textContent = "HOT POT WHERE POT SHOULD BE";
    }
    const _bottomMenu =()=>{
        let bottomPage = addElement("div",page,"bottom-page");
        bottomPage.setAttribute("class","bottom-menu");
        let content = [["base",Base],["meat",Meat],["noodles",Noodles],["seafood",Seafood],["vegetable",Vegetable]];
        for(let i of content){
            let childMenu = addElement("div",bottomPage,`${i[0]}-menu`);
            let menuTitle = addElement("div",childMenu,`${i[0]}-title`);
            menuTitle.textContent = i[0].toUpperCase();
            let paragraph = i[1].split(",");
            for(let item of paragraph){
                let p = addElement("p",childMenu,"");
                p.textContent = item;
            }   
        }
    }
    const _potMenu = ()=>{
        let bottomPage = addElement("div",page,"bottom-page");
        bottomPage.setAttribute("class","Pot-menu")
        let info = Staff.split(";");
        let content =[["inox",Inox,info[0]],["Clay",clayPot,info[1]],["Round",RoundPot,info[2]]];
        for(let i of content){
            let NameCard = addElement("div",bottomPage,`${i[0]}-card`);
            let imgCard = addElement("div",NameCard,"");
            let img = addElement("img",imgCard,"");
            img.src = i[1];
            let cardContent = addElement("p",NameCard,"");
            cardContent.textContent = i[2];
            
        }
    }

    const _clearBottom = ()=>{
        let clear = document.querySelector("#bottom-page");
        if(clear != null && clear !=undefined){
            clear.remove();
        }
    }
    return{Page,}
})();
restaurant.Page();