import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons'

const ListItem = (props) => {
    return (
        <div className="item">
            {props.item.itemName}
            <span className="qtyPart">
                <FontAwesomeIcon 
                icon={faLessThan}
                onClick={() => props.handleQtyDecrease(props.idx)}
                />
                <span className="qtyNumber" >{props.item.qty}</span>
                <FontAwesomeIcon 
                icon={faGreaterThan}
                onClick={() => props.handleQtyIncrease(props.idx)}
                />
            </span>
        </div>
    );
}

export default ListItem;