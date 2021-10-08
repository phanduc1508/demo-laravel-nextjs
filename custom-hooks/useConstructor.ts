import { useRef } from 'react';

type ConstructroCallback = () => void;

function useConstructor(callback: ConstructroCallback): void {
    const isRun = useRef(false);

    if(isRun.current == false) {
        callback();
        isRun.current = true;
    }
}

export default useConstructor;