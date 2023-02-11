import { animated, useSpring } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { toCurrency } from '../utils/formats';

export const MoneyBar = () => {
    const money = useSelector(state => state.basket.money);
    const animatedProps = useSpring({ money });

    return (
        <div className='money-bar'>
            <animated.h1>
                {
                    animatedProps.money.to(x => toCurrency(x))
                }
            </animated.h1>
        </div>
    );
};