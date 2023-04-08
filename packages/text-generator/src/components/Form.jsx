import { useContext } from 'react';
import { AppContext } from '../store';

const Form = () => {
    const { paras, setParas, includeHTML, setIncludeHTML } = useContext(AppContext);

    return (
        <div className='form'>
            <div>
                <label htmlFor="paras">Paragraphs</label>
                <br />
                <input name='paras' type="number" min={1} value={paras} onChange={e => setParas(e.target.value)} />
            </div>
            <div>
                <label htmlFor="includeHTML">Include HTML</label>
                <br />
                <select name='includeHTML' defaultValue={includeHTML} onChange={e => setIncludeHTML(e.target.value)}>
                    <option value="text">No</option>
                    <option value="html">Yes</option>
                </select>
            </div>
        </div>
    );
};

export default Form;