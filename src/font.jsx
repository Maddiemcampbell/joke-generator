import React from 'react';

export default props => (
    <div>
        <h1>Palette Inspiration</h1>
        <div className='cardContainer'>

            <div id='first' className='wrapper'>
                <div className='textWrapper'>
                    <h4>Ag</h4>
                    <h5>AaBbCc</h5>
                </div>

                <div className="bottomContainer">
                    <h5>font name</h5>
                    <h5>#BackgroundColor</h5>
                </div>
            </div>
            <div id='second' className='wrapper'>
                <div className='textWrapper'>
                    <h4>Ag</h4>
                    <h5>AaBbCc</h5>
                </div>
                <div className="bottomContainer">
                    <h5>font name</h5>
                    <h5>#BackgroundColor</h5>
                </div>
            </div>
            <div id='third' className='wrapper'>
                <div className='textWrapper'>
                    <h4>font name</h4>
                    <h5>AaBbCc</h5>
                </div>
                <div className="bottomContainer">
                    <h5>Font Title</h5>
                    <h5>#BackgroundColor</h5>
                </div>
            </div>
            <div id='fourth' className='wrapper'>
                <div className='textWrapper'>
                    <h4>Ag</h4>
                    <h5>AaBbCc</h5>
                </div>
                <div className="bottomContainer">
                    <h5>font name</h5>
                    <h5>#BackgroundColor</h5>
                </div>
            </div>
            <div id='fifth' className='wrapper'>
                <div className='textWrapper'>
                    <h4>Ag</h4>
                    <h5>AaBbCc</h5>
                </div>
                <div className="bottomContainer">
                    <h5>font name</h5>
                    <h5>#BackgroundColor</h5>
                </div>
            </div>
        </div>
        <h2>Color Palette: "Title of Palette"</h2>
        <h4>Created By: "Author of Palette"</h4>
        <button className='refreshButton'>Refresh</button>
    </div>

);