import { motion } from "framer-motion"
import  exit  from "../assets/icon-close.svg"
import { Dispatch, SetStateAction } from "react"

interface IProps{
    setClick: (b: boolean) => void;
}

export const Hmg : React.FC<IProps> = ({setClick})  =>{
    return <motion.div className="hmg">
            <motion.div whileHover={{rotate:90,}} style={{width:"18px",height:"18px"}} className="exit" onClick={()=>{setClick(false)}}>
                <svg style={{width:"18px",height:"18px"}}>
                    <image href={exit} />
                </svg>
            </motion.div>
        <div className="links">
            <motion.div whileHover={{ scale: 1.04, x: 5 }} className="sec">Home</motion.div>
            <motion.div whileHover={{ scale: 1.04, x: 5 }} className="sec">Shop</motion.div>
            <motion.div whileHover={{ scale: 1.04, x: 5 }} className="sec">About us</motion.div>
            <motion.div whileHover={{ scale: 1.04, x: 5 }} className="sec">Contact</motion.div>
        </div>
    </motion.div>
}