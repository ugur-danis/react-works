import { toCurrency } from "../../utils/formats";

export const ReceiptItem = ({ data }) => {
    return (
        <tr className="receipt-table-item">
            <td className="product-name">{data.name}</td>
            <td>x{data.amount}</td>
            <td className="product-price">
                {
                    toCurrency(data.price, { notation: 'compact' })
                }
            </td>
        </tr>
    );
};