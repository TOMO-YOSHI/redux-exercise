import React from 'react';

import './inputArea.styles.scss';

const InputArea = () => {
    return (
        <div className="inputAreaDiv">
            <form>
                <input type="text" placeholder="Your Name" />
                <textarea placeholder="Write message" />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default InputArea;