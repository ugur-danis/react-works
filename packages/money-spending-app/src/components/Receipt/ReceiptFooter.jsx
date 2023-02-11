import { animated, useSpring } from '@react-spring/web';
import { useSelector } from "react-redux";
import { toCurrency } from "../../utils/formats";

export const ReceiptFooter = () => {
    const totalAmount = useSelector(state => state.basket.totalAmount);
    const animatedProps = useSpring({ totalAmount });

    return (
        <>
            <tr className="receipt-table-footer-hr">
                <td colSpan={3}><hr /> </td>
            </tr>
            <tr className="receipt-table-footer">
                <th>TOTAL</th>
                <animated.td colSpan='2'>
                    {
                        animatedProps.totalAmount.to(x => toCurrency(x))
                    }
                </animated.td>
            </tr>
        </>
    );

};