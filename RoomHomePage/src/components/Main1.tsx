import { SVGProps, useEffect, useState } from "react"
import logo from '../assets/logo.svg';
import logo1 from '../assets/desktop-image-hero-1.jpg';
import logo2 from '../assets/desktop-image-hero-2.jpg';
import logo3 from '../assets/desktop-image-hero-3.jpg';
import { AnimatePresence, motion, useAnimation } from "framer-motion";

interface IProps{
    count:number
}


export const Main1 : React.FC<IProps> = ({count}) =>{
    const[ımg,setImg] = useState(logo1)

   

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
            <motion.div key={`${ımg}-${count}`} initial={{x:-50}}  animate={{x:0}} transition={{ duration: 1 }} className="main main1" style={{backgroundImage:`url(${ımg})`}} >
                <div className="navbar">
                     <div className="logo">
                        <svg style={{width:"65px"}}>
                            <image href={logo} />
                        </svg>
                    </div>
                    <div className="sec">Home</div>
                    <div className="sec">Shop</div>
                    <div className="sec">About us</div>
                    <div className="sec">Contact</div>
            </div>

            </motion.div>
        </AnimatePresence>
    )
}