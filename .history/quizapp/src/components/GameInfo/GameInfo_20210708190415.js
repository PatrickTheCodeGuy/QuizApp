import React, { useState } from 'react';
import './GameInfo.css';
import {
	Link
} from 'react-router-dom';
import{ ImArrowLeft, ImInfo }from 'react-icons/im';
import Modal from 'react-modal';
 

function GameInfo() {
	// Fix for screen readers getting an error on modal mount
	Modal.setAppElement('#root');

	// Modal hook
	const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <div className="gameInfo-container">
            <div className="gameInfo-header">
                <Link className="back-button" to="/">
																		<ImArrowLeft size="small" className="back-arrow"/>
																</Link>
																<button onClick={() => setModalIsOpen(true)}>
																	<ImInfo className="info-icon"/>
																</button>
																<Modal onRequestClose={() => setModalIsOpen(false)} isOpen={modalIsOpen}>
																		<h1>Modal is Open</h1>
																</Modal>
            </div>
            <div className="gameInfo-body">
																<h1 className="menu-text">Rules</h1>
                <p className="regular-text">A quiz game, try and get the highest score!</p>
            </div>
												
												</div>
    )
}

export default GameInfo;