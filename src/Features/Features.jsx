import {  AiFillThunderbolt } from "react-icons/ai";
import PropTypes from 'prop-types';
const Features = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-2"><AiFillThunderbolt className="text-green-400"/>{feature}</p>
        </div>
    );
};

Features.propTypes = {
    option: PropTypes.string
}
export default Features;