import React, { useState } from 'react';
import './GameInfo.css';
import {
	Link
} from 'react-router-dom';
import{ ImArrowLeft, ImInfo }from 'react-icons/im';
import Modal from 'react-modal';
 

function GameInfo() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <div class="gameInfo-container">
            <div class="gameInfo-header">
                <Link to="/">
																		<ImArrowLeft class="back-arrow"/>
																</Link>
																<button onClick={() => setModalIsOpen(true)}>
																	<ImInfo class="info-icon"/>
																</button>
																<Modal onRequestClose={() => setModalIsOpen(false)} isOpen={modalIsOpen}>
																		<h1>Modal is Open</h1>
																</Modal>
            </div>
            <div class="gameInfo-body">
																<h1 class="menu-text">Quizania</h1>
                <p class="regular-text">A quiz game, try and get the highest score!</p>
            </div>
												
												</div>
    )
}

export default GameInfo;