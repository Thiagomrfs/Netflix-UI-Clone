import react, { useState } from "react";
import "./MovieRow.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({ title, items }) => {
    const [rowScroll, setRowScroll] = useState(0);

    function handleLeftArrow() {
        let x = rowScroll + Math.round(window.innerWidth / 2);

        if (x > 0) {
            x = 0
        }

        setRowScroll(x);
    }

    function handleRightArrow() {
        let x = rowScroll - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;

        if (window.innerWidth - listWidth > x) {
            x = (window.innerWidth - listWidth) - 60;
        }

        setRowScroll(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--listArea">
                <div className="movieRow--list" style={{ marginLeft: rowScroll }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}