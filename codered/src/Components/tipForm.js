import React, {useState, useEffect} from 'react';

const TipForm = (props) =>{

    const initialValues = {
        tipName: '',
        tip: '',
        example: ''
    }
    var [info, setInfo] = useState(initialValues);

    const handleChange = e =>{
        var{name,value} = e.target;
        setInfo({
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Tip Name:
                <input type="text" value={info.tipName}
                onChange={handleChange} />
            </label>

            <br />
            
            <label>
                Tip: 
                <input type="text" value={info.tip}
                onChange={handleChange} />
            </label>

            

            <input type="submit" value="Submit" />
        </form>
    );
}
export default TipForm;
