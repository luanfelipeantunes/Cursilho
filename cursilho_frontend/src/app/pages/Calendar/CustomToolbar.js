import './Calendar.css';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const CustomToolbar = props => {
    const { label, onNavigate } = props;

    return <>
        <div className='toolbar'>
            
            <div className="rbc-btn-group">
                <button className='buttonToolbar' type="button" onClick={() => onNavigate('PREV')}>
                <FaAngleDoubleLeft />
                </button>
            </div>

                <div className="rbc-toolbar-label">{label}</div>

            <div className='rbc-btn-group'>
                <button className='buttonToolbar' type="button" onClick={() => onNavigate('NEXT')}>
                    <FaAngleDoubleRight />
                </button>
            </div>
        </div>
    </>

}

export default CustomToolbar;