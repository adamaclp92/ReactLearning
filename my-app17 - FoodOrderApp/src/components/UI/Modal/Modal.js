import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.css'

    const BackDrop = props => {
        return <div className={styles.backdrop} onClick={props.hideCart}></div>
    }

    const ModalOverlay = props => {
        return <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    }

    const Modal = (props) =>{
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop hideCart={props.hideCart} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default Modal