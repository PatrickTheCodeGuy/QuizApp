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
																		<ImArrowLeft size={64} className="back-arrow"/>
																</Link>
																<button class="modal-button"onClick={() => setModalIsOpen(true)}>
																	<ImInfo size={64} className="info-icon"/>
																</button>
																<Modal onRequestClose={() => setModalIsOpen(false)} isOpen={modalIsOpen}>
																		<h1>Modal is Open</h1>
																</Modal>
            </div>
            <div className="gameInfo-body">
																
            </div>
												
												</div>
    )
}

export default GameInfo;