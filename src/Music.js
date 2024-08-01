import { useRef } from "react";

const FilterMusic = ({filter}) => {

    const music = useRef('');

    const handlerSearch = () => {
        const enteredMusic = music.current.value;

        if (enteredMusic.trim() === '') { return }
    
        filter(enteredMusic)
    }

    return (
        <div>
            <input ref={music} type="text" /><button onClick={handlerSearch}>pesuisar</button>
        </div>
    )
}

export default FilterMusic;