import { useEffect, useState } from "react";
import Card from "./Card/Card";


const Cards = ({handlebtn}) => {
    const [courseCards, setCourseCards]=useState([])
    useEffect(()=>{
        fetch('CourseData.json')
        .then(res => res.json())
        .then(data => setCourseCards(data))
    },[])
    return (
        
       <div className="gap-7 grid grid-cols-3 md:w-3/4"> 
            {
                courseCards.map(courseCard => <Card courseCard={courseCard} handlebtn={handlebtn}></Card>)
            }
       </div>
    );
};

export default Cards;