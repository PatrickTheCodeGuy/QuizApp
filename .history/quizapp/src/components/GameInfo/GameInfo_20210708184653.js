import React, { useState } from 'react';
import './GameInfo.css';
import {
	Link
} from 'react-router-dom';
import{ ImArrowLeft }from 'react-icons/im';
import Modal from 'react-modal';
 

function GameInfo() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <div class="gameInfo-container">
            <div class="gameInfo-header">
                <Link to="/">
																		<ImArrowLeft class="back-arrow"/>
																</Link>
																<Modal isOpen={modalIsOpen}>
																		<h1>?</h1>
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