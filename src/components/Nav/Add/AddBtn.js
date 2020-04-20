import React, {useState} from 'react';
import styles from './AddBtn.module.css';
import Modal from '../../Modal/Modal'
import AddModal from './AddModal/AddModal'

export default ({userInfo})=>{
    const [modal, setModal] = useState(false);
    return ( userInfo.type === 'admin' &&
        <>
            <button onClick={()=>setModal(true)} className={styles.Add}>Add</button>
            {modal &&  
                <Modal close={()=>setModal(false)}>
                    <AddModal close={()=>setModal(false)}/>
                </Modal>
            }
        </>
    );
}