import { TypeAnimation } from 'react-type-animation';
import carousel from '../assets/img/carousel1.jpg';
const Carousel = () => {
return (
    <div
    className='w-full h-[400px] my-2 shadow-lg py-[54px] px-1 sm:h-60 sm:py-16 sm:px-4 lg:h-[270px] lg:p-16'
    style={{
        backgroundImage: `url(${carousel})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}
    >
    <div className='font-semibold text-sm text-white sm:text-4xl lg:text-2xl xl:text-3xl mt-[100px]'>
        <q>
        <TypeAnimation
        sequence={[
            'Life is uncertain, Eat dessert first: Ernestine Ulmer',
            2500,
            'Food is symbolic of love when words are inadequate: Alan D. Wolfelt',
            2500,
            'All happiness depends on a leisurely breakfast: John Gunther',
            2500,
        ]}
        cursor={true}
        repeat={Infinity}
        />
        </q>
    </div>
    </div>
);
};

export default Carousel;