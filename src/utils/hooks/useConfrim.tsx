
export const useConfirm= (massage = " ", onConfirm: () => void) => {
    let result;
    if (typeof onConfirm !== "function") {
        return;
    }
    const confrimAction = () => { 
        if (window.confirm(massage)) {
            onConfirm();
            result = true;
        } else {
            result = false;
        }
    };
    confrimAction()
    return result;
}
