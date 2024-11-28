import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";

const MyCollapsible = ({title, content }) => {

    return (
        <div className='card my-collapsible-container'>
            <Collapsible
                transitionTime={100}
                trigger={<div className='collapsible-trigger-content p-2'>{title} <BsChevronDown /></div>}>
                {content}
            </Collapsible>
        </div>
    );

}

export default MyCollapsible;