import { useSelector } from "react-redux";
import { ReceiptFooter } from "./ReceiptFooter";
import { ReceiptItem } from "./ReceiptItem";

export const ReceiptList = () => {
    const items = useSelector(state => state.basket.items)
        .filter(x => x.amount > 0);

    if (items.length < 1) return;

    return (
        <div className="receipt-container">
            <div className="receipt-header">
                <h2>Your Receipt</h2>
            </div>
            <table className="receipt-table">
                <tbody>
                    {items.map(item => <ReceiptItem key={item.id} data={item} />)}
                    <ReceiptFooter />
                </tbody>
            </table>
        </div>
    );
};