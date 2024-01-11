import React from 'react'

const OptionCheckbox = ({label,url}) => {
    return (
        <>
            <div className="optional">
                <label className="common-16-2" htmlFor="">
                    <input className='checkbox-input' type="checkbox" name="" id="" />{label}
                </label>
                <img src={url} alt="payimg" />
            </div>
        </>
    )
}

export default OptionCheckbox