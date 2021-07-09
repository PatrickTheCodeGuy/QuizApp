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
																	<ImInfo size={32} className="info-icon"/>
																</button>
																<Modal onRequestClose={() => setModalIsOpen(false)} isOpen={modalIsOpen}>
																		<h1>Modal is Open</h1>
																</Modal>
            </div>
            <div className="gameInfo-body">
																<h5 class="rules-text">Rules</h5>
            </div>
												<div>
													<p class="regular-text info">Welcome to Quizania! 
													The rules are simple: Answer the question in the alloted time. If you select the correct answer you get points! Try to get as many as you can until you cant anymore.</p>
													<p class="regular-text warning">IMPORTANT: DO NOT LEAVE THE TAB OR YOU WILL AUTOMATICALLY FAIL!</p>
													<Link to='/newGame' class="button-start">Start</Link>
												</div>
												
												</div>
    )
}

export default GameInfo;