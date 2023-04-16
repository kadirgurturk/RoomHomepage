import arrow from "../assets/icon-arrow.svg"
import  leftsvg  from "../assets/icon-angle-left.svg"
import  rightsvg  from "../assets/icon-angle-right.svg"
import { asset } from "../Model/model"



interface IProps{
    count:number
    setCount:(count:number)=>void
    mainAsset:asset
}

export const Main2: React.FC<IProps> = ({count,setCount,mainAsset}) =>{

    const left = () =>{
        if(count <= 0){
            setCount(2)
        }else{
        setCount(count - 1)}
    }

    const right= () =>{

        if(count >= 2 ){
            setCount(0)
        }else{
        setCount(count + 1)}

       
    }

    return(
        <div className="main main2" >
            <h1>{mainAsset.title}</h1>
            <p>{mainAsset.content}</p>
            <div><span>SHOP NOW</span><svg style={{height:"11px"}}><image href={arrow}/></svg></div>
            <div className="slider">
                <div onClick={left} className="arrow" ><img src={leftsvg} /></div>
                <div onClick={right} className="arrow" ><img src={rightsvg} /></div>
            </div>
        </div>
    )
}