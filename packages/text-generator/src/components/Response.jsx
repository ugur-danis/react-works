import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../store';

const Response = () => {
    const { paras, includeHTML } = useContext(AppContext);
    const [paragraph, setParagraph] = useState('');

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://baconipsum.com/api/?type=all-meat&${paras}=2&format=${includeHTML}`);
            const data = await response.text();
            setParagraph(data);
        })();
    }, [paras, includeHTML]);

    return (
        <div className='response'>
            {paragraph}
        </div>
    );
};

export default Response;