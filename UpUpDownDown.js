function uudd(uudd_done_code) {
    if (typeof(uudd_done_code) !== 'function') {
        console.log('The parameter is not a function. :(');
        uudd_done_code = function() {}
    };
    document.onkeydown = uudd_check;

    function uudd_check(e) {
        e = e || window.event;
        if (typeof(uudd_progress) == 'undefined') uudd_progress = Array();
        if (e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'a' || e.key == 'b') {
            if (uudd_progress.length == 0) {
                if (e.key == 'ArrowUp') {
                    uudd_progress = Array('UP');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 1) {
                if (e.key == 'ArrowUp') {
                    uudd_progress = Array('UP', 'UP');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 2) {
                if (e.key == 'ArrowDown') {
                    uudd_progress = Array('UP', 'UP', 'DOWN');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 3) {
                if (e.key == 'ArrowDown') {
                    uudd_progress = Array('UP', 'UP', 'DOWN', 'DOWN');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 4) {
                if (e.key == 'ArrowLeft') {
                    uudd_progress = Array('UP', 'UP', 'DOWN', 'DOWN', 'LEFT');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 5) {
                if (e.key == 'ArrowRight') {
                    uudd_progress = Array('UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 6) {
                if (e.key == 'ArrowLeft') {
                    uudd_progress = Array('UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 7) {
                if (e.key == 'ArrowRight') {
                    uudd_progress = Array('UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 8) {
                if (e.key == 'b') {
                    uudd_progress = Array('UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'B');
                } else {
                    uudd_reset();
                }
            } else if (uudd_progress.length == 9) {
                if (e.key == 'a') {
                    uudd_reset();
                    uudd_done_code();
                } else {
                    uudd_reset();
                }
            }
        } else {
            uudd_reset();
        }
    }

    function uudd_reset() {
        uudd_progress = Array();
    }
}
