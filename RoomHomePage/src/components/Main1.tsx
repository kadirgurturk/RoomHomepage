import { SVGProps, useEffect, useState } from "react"
import logo from '../assets/logo.svg';
import logo1 from '../assets/desktop-image-hero-1.jpg';
import logo2 from '../assets/desktop-image-hero-2.jpg';
import logo3 from '../assets/desktop-image-hero-3.jpg';
import hmg from     "../assets/icon-hamburger.svg";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Hmg } from "./Hmg";

interface IProps{
    count:number
}


export const Main1 : React.FC<IProps> = ({count}) =>{
    const[ımg,setImg] = useState(logo1)
    const [isMobile, setIsMobile] = useState(false);
    const [isClick,setClick] = useState(false);

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 650) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
          }
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      function handleLinkClick() {
        if (isMobile) {
          setIsMobile(false);
        }
      }
   

    useEffect(()=>{
        switch(count){
            case 0:{
                setImg(logo1)
                break
            }
            case 1:{
                setImg(logo2)
                break
            }
            case 2:{
                setImg(logo3)
                break
            }
        }

    },[count])
    
    return(
       <AnimatePresence> 
           {
            !isMobile ? ( <motion.div key={`${ımg}-${count}`} initial={{opacity:0.6,x:-40}}  animate={{opacity:1,x:0}} transition={{ duration: 1,ease:"easeIn" }} className="main main1" style={{backgroundImage:`url(${ımg})`}} >
            <div className="navbar">
                 <div className="logo">
                    <svg style={{width:"65px"}}>
                        <image href={logo} />
                    </svg>
                </div>
                <motion.div whileHover={{scale:1.04, x:5}} className="sec">Home</motion.div>
                <motion.div whileHover={{scale:1.04, x:5}} className="sec">Shop</motion.div>
                <motion.div whileHover={{scale:1.04, x:5}} className="sec">About us</motion.div>
                <motion.div whileHover={{scale:1.04, x:5}} className="sec">Contact</motion.div>
            </div>
            </motion.div>
            ) :

            (

            <motion.div key={`${ımg}-${count}`} initial={{opacity:0.6,x:-40}}  animate={{opacity:1,x:0}} transition={{ duration: 1,ease:"easeIn" }} className="main main1" style={{backgroundImage:`url(${ımg})`}} >
                <div className="navbar">
                    <motion.div  whileHover={{rotate:90,}} style={{width:"18px",height:"18px", }} className="hmg" onClick={()=>{setClick(true)}}>
                        <svg style={{width:"18px",height:"18px"}}>
                            <image href={hmg} />
                        </svg>
                    </motion.div>
                    <div className="logo">
                        <svg style={{width:"65px"}}>
                            <image href={logo} />
                        </svg>
                    </div>
                    {isClick && <Hmg setClick={setClick}/>}
                    
                </div>
            </motion.div>
        )
           }
        </AnimatePresence>
    )
}