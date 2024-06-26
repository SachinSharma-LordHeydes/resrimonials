
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";



function Cards(props){
    const review=props.review;
    const testo=props.testo;
    const setTesto=props.setTesto;

    function rightClick(id){
        if(id>4){
            setTesto(review[0])
        }else{
            setTesto(review[id])
        }

    }
    function leftClick(id){
        id--;
        if(id<0){
            setTesto(review[4])
        }else{
            setTesto(review[id])
        }
    }

    function showRandTesto(){
        let randId=Math.floor(Math.random()*5);
        console.log(randId);
        setTesto(review[randId]);
    }

    return(
        <div className="">
            <div className="absolute top-[-39px] left-[-30px]">
                <img className="w-20 h-20 rounded-full" src={testo.image}></img>
            </div>

            <div className="font-bold text-2xl">
                {testo.name}
            </div>
                <div className="mb-5 text-xs text-purple-900">
                    {testo.job}
                </div>

            <div className="mb-2 items-center flex justify-center text-purple-800"><FaQuoteRight /></div>
            

            <div className="text-sm text-center">
                {testo.text}
            
            </div>
            <div className="my-2 items-center flex justify-center text-purple-800"><FaQuoteLeft /></div>
            <div>
                <button className="text-xl font-bold m-4 text-purple-800" onClick={()=>leftClick((testo.id)-1)}>{`<`}</button>
                <button className="text-xl font-bold m-4 text-purple-800" onClick={()=>rightClick(testo.id)}>{`>`}</button>
            </div>
            <div>
                <button className="mt-4 bg-purple-800 px-5 rounded-md text-white" onClick={showRandTesto}>Suprise Me</button>
            </div>
        </div>
    )
}

export default Cards;










// <div>HANZO</div>
//             <div>
//                 {/* <img src={review.image}></img> */}
//             </div>

//             <div>
//                 {review.name}
//                 <div>
//                     {review.job}
//                 </div>
//             </div>

            

//             <div>
//                 {review.text}
            
//             </div>
//             <div>HANZO</div>
//             <div>
//                 <button>{`<`}</button>
//                 <button>{`>`}</button>
//             </div>
//             <div>Suprise Me</div>