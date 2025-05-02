import React from "react";
import'/src/index.css';
import'./header.css'
import croix from '/src/assets/croix.png'


function Header(){
  let trait=document.getElementById("trait");
  let ptexte=document.getElementById("ptexte");
  let clo=document.getElementById("clo")
    
    return(
       
       <header className="w-1/1 h-15">
        <nav className="w-1/1 h-16 bg-emerald-500 grid grid-cols-2">

          <div className=" grid grid-cols-2" id="p1">
             <span className="bg-blue-800 flex items-center justify-center" id="logo">
               <div className="w-1/4 relative" id="menu">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" id="trait" onClick={()=>{ptexte.style.visibility="visible"; trait.style.display='none'}}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  
                  <div className="bg-white w-35 z-1   absolute grid grid-cols-1 grid-rows-5 gap-1 rounded"  name="ptexte" id="ptexte">
                  <img src={croix} alt="" srcset="" className="w-7" id="clo" onClick={()=>{ptexte.style.visibility="hidden"; trait.style.display='block'}}/>
                    <a href="" className=" border-amber-500 border-1 flex items-center justify-center rounded" id="ho">home</a>
                    <a href="" className="border-amber-500 border-1 flex items-center justify-center rounded" id="fi">films</a>
                    <a  href="" className="border-amber-500 border-1 flex items-center justify-center rounded" id="se">séries</a>
                    <a href="" className="border-amber-500 border-1 flex items-center justify-center rounded" id="pr">prémium</a>
                    <a href="" className="border-amber-500 border-1 flex items-center justify-center rounded" id="co">connexion</a>
                  </div>
               </div>
               <div className="w-3/4 bg-amber-900 text-center" >LOGO</div>
             </span>

             <div className="grid grid-cols-3  " id="ele">
               <div >
                 <li className="list-none flex items-center justify-center">
                    <a href="" className="text-amber-500 mt-6">HOME</a>
                 </li>
                 <div className="bg-amber-500 h-1 mt-2"></div>
               </div>
               <div>
                 <li className="list-none flex items-center justify-center">
                    <a href="" className="hover:text-amber-500 mt-6 text-white">FIMLS</a>
                 </li>  
               </div>
               <div>
                 <li className="list-none flex items-center justify-center">
                    <a href="" className="hover:text-amber-500 mt-6 text-white">SERIES</a>
                 </li>
               </div>
             </div>

          </div>

           <div className=" grid grid-cols-2" id="p2">
             <div className=""></div>
             <div className=" grid grid-cols-3" id="ele2">
              <div className=" flex items-center justify-end" id="v3">
                <span className="rounded-full w-9 h-9 bg-amber-500 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.12-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                   </svg>
                </span>
              </div>
              <div className=" flex items-center justify-center" id="v2">
                 <a href="" className="flex items-center justify-start" title="PREMIUM">
                 <span className="rounded-full w-9 h-9 bg-amber-500 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6  text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M2 6l4.5 4.5L9 6l3 5 3-5 2.5 4.5L22 6v12H2V6zm2 14h16v2H4v-2z"/>
                   </svg>
                 </span>
                 </a>
              </div>
              <div className=" flex items-center justify-start" id="v1">
                  <a href="" className="flex items-center justify-start">
                   <span className=" w-9 h-9 bg-amber-500 rounded-l-4xl flex items-center justify-center" id="per">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                  </svg>
                   </span>
                    <p className="w-19 flex items-center justify-center h-9 text-white bg-amber-500 rounded-r-4xl" id="texte">connexion</p>
                  </a>
              </div>
             </div>
           </div>
        </nav>
       </header>
    )
}

export default Header;