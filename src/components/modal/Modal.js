import styles from './Modal.module.scss'

const Modal = ({handleClick}) => {

    return (
        <>
            <div className={styles.modal} onClick={handleClick}>
                <h2>
                    Thank you for registering! 
                </h2>
                <button>CLOSE</button>
            </div>
        </>
    )
};

export default Modal;