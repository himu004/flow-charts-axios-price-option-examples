
import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='flex-col bg-blue-500 rounded-xl py-10 px-5 space-y-5 text-white' >
            <h2>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h2 className='text-3xl'>{name}</h2>
            <div className=" space-y-2 flex-grow">
            {
                features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
            }
            </div>
            <button className='bg-green-400 w-full py-3 rounded-lg font-bold hover:bg-green-600'>BUY NOW</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;