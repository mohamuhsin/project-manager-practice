import { useRef, forwardRef, useImperativeHandle } from "react";

import { createPortal } from "react-dom";

import Button from "./Button";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });
    return createPortal(
        <dialog
            ref={dialog}
            className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md"
        >
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{btnCaption}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;
