import classes from "./modal.module.css";
import React, { Fragment } from "react";
import  ReactDOM  from "react-dom";

const Backdrop=()=>{
    return(<div className={classes.backdrop}></div>)
}

const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portalEle = document.getElementById('overlays');


const Modal=(props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>,portalEle)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEle)}

        </Fragment>
        
    )

}

export default Modal