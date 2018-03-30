var uuddProgress = Array();
function uudd(uuddDoneCode) {
    if (typeof(uuddDoneCode) !== "function") {
        uuddDoneCode = function() {};
        throw "The argument is no function :(";
    }
    function uuddReset() {
        uuddProgress = Array();
    }
    function uuddCheck(e) {
        e = e || window.event;
        if (typeof(uuddProgress) === "undefined"){ uuddReset(); }
        if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "a" || e.key === "b") {
            if (uuddProgress.length === 0) {
                if (e.key === "ArrowUp") {
                    uuddProgress = Array("UP");
                } else {
                    uuddReset();
                }
            } else if (uuddProgress.length === 1) {
                if (e.key === "ArrowUp") {
                    uuddProgress = Array("UP", "UP");
                } else {
                    uuddReset();
                }
            } else if (uuddProgress.length === 2) {
                if (e.key === "ArrowDown") {
                    uuddProgress = Array("UP", "UP", "DOWN");
                } else {
                    uuddReset();
                }
            } else if (uuddProgress.length === 3) {
                if (e.key === "ArrowDown") {
                    uuddProgress = Array("UP", "UP", "DOWN", "DOWN");
                } else {
                    uuddReset();
                }
            } else if (uuddProgress.length === 4) {
                if (e.key === "ArrowLeft") {
                    uuddProgress = Array("UP", "UP", "DOWN", "DOWN", "LEFT");
                } else {
                    uuddReset();
                }
            } else if (uuddProgress.length === 5) {
                if (e.key === "ArrowRight") {
                    uuddProgress = Array("UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT");
                } else {
                    uuddReset();
                }
            } else if (uuddProgress.length === 6) {
                if (e.key === "ArrowLeft") {
                    uuddProgress = Array("UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT");
                } else {
                    uuddReset();
                }
            } else if (uuddProgress.length === 7) {
                if (e.key === "ArrowRight") {
                    uuddProgress = Array("UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT");
                } else {
                    uuddReset();
                }
            } else if (uuddProgress.length === 8) {
                if (e.key === "b") {
                    uuddProgress = Array("UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "B");
                } else {
                    uuddReset();
                }
            } else {
                uuddReset();
                if (e.key === "a") {
                    uuddDoneCode();
                }
            }
        } else {
            uuddReset();
        }
    }
    document.onkeydown = uuddCheck;
}
