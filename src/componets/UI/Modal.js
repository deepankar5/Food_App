import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function Backdrop() {
    return <div className={classes.backdrop} />;
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

function Modal(props) {
    const portalElement = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
}

export default Modal;