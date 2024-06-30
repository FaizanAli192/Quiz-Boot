function changequestion(questionNum, val) {
    setTimeout(function () {
        var curr_ques = document.getElementById(questionNum + "ques");
        var next_ques = document.getElementById((questionNum + 1) + "ques");
        curr_ques.style.display = "none";
        next_ques.style.display = "block";
    }, 1000);
    var score = document.getElementById("score");
    console.log(val);
    if (val) {
        score.innerHTML = (questionNum * 10) + "";
    }
}

function finalres(questionNum, val) {
    setTimeout(
        function () {
            var curr_ques = document.getElementById((questionNum) + "ques");
            var final = document.getElementById("finalscore");
            curr_ques.style.display = "none";
            final.style.display = "block";
        },
        1000);
    var score = document.getElementById("score");
    console.log(val);
    if (val) {
        var final = document.getElementById("finalscore");
        var curr = score.innerHTML;
        if (curr === "0")
            score.innerHTML = (questionNum * 10) + "";
        else score.innerHTML = "100";
        var finalsc = score.innerHTML;
        final.innerHTML = `Your Total Score ${finalsc} out of 100`;
    } else {
        var curr = score.innerHTML;
        var final = document.getElementById("finalscore");
        final.innerHTML = `Your Total Score ${curr} out of 100`;
    }

}