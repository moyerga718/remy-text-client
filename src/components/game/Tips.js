import { useState, useEffect } from "react"

export const Tips = () => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return <>
        <p className="inventory-item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>How to Play</p>
        {

            (isHovering)
                ? <div className="description-div">
                    <p>How to Play:</p>
                    <p>{'> '}Valid inputs</p>
                    <p>Control your character by typing verb-noun combinations into the command prompt provided and hit enter. For example, if there is a tree to the north, type in "go north" or "walk tree". If you'd like to pick up the ball in front of you, try "take ball". If you want to throw the ball, try "throw ball", "use ball", etc.... Use your intuition.</p>
                    <p>{'> '}Problem solving</p>
                    <p>Your character needs to collect items and use them in the correct situations to progress through the game. Check item descriptions for clues by hovering your mouse over the items in your inventory. Environmental clues are helpful too. If you are stuck, just go somewhere else. The right clue may be in another area. </p>
                </div>
                : <></>
        }

    </>
}