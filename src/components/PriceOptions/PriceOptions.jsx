
import PriceOption from '../../PriceOption/PriceOption';
const PriceOptions = () => {
    const priceOptions = 
    [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99",
          "features": [
            "Access to gym facilities",
            "Cardio and strength training equipment",
            "Locker room and showers",
            "Free fitness assessment",
            "Access to online workout videos"
          ]
        },
        {
          "id": 2,
          "name": "Silver Membership",
          "price": "$49.99",
          "features": [
            "All Basic Membership benefits",
            "Group fitness classes",
            "Personalized workout plan",
            "Nutritional guidance",
            "Weekly fitness workshops"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": "$79.99",
          "features": [
            "All Silver Membership benefits",
            "Access to sauna and spa",
            "Unlimited guest passes",
            "Discounts on personal training",
            "Monthly one-on-one training session"
          ]
        }
    ];
      
    return (
        <div className=''>
            <h2 className='text-3xl font-mono text-center p-5'>Best Prices in the town</h2>
            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto mt-10'>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;