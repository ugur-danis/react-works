import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, basketSelector } from "../../store/basketSlice";
import { toCurrency } from '../../utils/formats';
import getProductImg from '../../utils/getProductImg';

export const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const [maxAmount, setMaxAmount] = useState(0);
    const { money } = useSelector(basketSelector);

    const calcMaxAmount = useCallback(() => {
        setMaxAmount(Math.floor(parseInt(money + (product.price * amount)) / product.price));
    }, [setMaxAmount, money, product, amount]);

    const handleChangeAmount = useCallback(() => {
        dispatch(addProduct({ ...product, amount }));
    }, [dispatch, product, amount]);

    useEffect(() => {
        calcMaxAmount();
    }, [money, calcMaxAmount]);

    useEffect(() => {
        handleChangeAmount();
    }, [amount, handleChangeAmount]);

    const canBuy = newAmount => newAmount < maxAmount;

    const buyProduct = newAmount => {
        if (canBuy(newAmount)) {
            return setAmount(newAmount);
        }

        setAmount(maxAmount);
    };

    const incrementAmount = e => {
        buyProduct(amount + 1);
    };

    const decrementAmount = e => {
        buyProduct(amount - 1);
    };

    const onChangeAmountInput = e => {
        const value = parseInt(e.target.value) || 0;
        e.target.value = value;
        buyProduct(value);
    };

    return (
        <div className="product">
            <div className="product-content">
                <img src={getProductImg(product.img)} alt={product.img} />
                <h3>{product.name}</h3>
                <h4>{toCurrency(product.price)}</h4>
            </div>
            <div className="product-footer">
                <button disabled={amount < 1} className='sell-btn' onClick={decrementAmount}>Sell</button>
                <input type='number'
                    inputMode="numeric"
                    min={0}
                    max={maxAmount}
                    value={amount}
                    onChange={onChangeAmountInput} />
                <button disabled={!canBuy(amount)} className='buy-btn' onClick={incrementAmount}>Buy</button>
            </div>
        </div>
    );
};