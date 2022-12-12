import { BsBoxArrowLeft, BsFillHouseFill, BsFillPieChartFill, BsFillJournalBookmarkFill, BsFillGearFill } from "react-icons/bs";
function SliderBar() {
    return ( 
        <div className="contSlider">
            <div className="contBody">
                <BsFillHouseFill className="icon"/>
                <BsFillJournalBookmarkFill className="icon"/>
                <BsFillPieChartFill className="icon"/>
                <BsFillGearFill className="icon config"/>
            </div>
            <div className="contLog">

                <BsBoxArrowLeft className="icon"/>
            </div>
        </div>
     );
}

export default SliderBar;