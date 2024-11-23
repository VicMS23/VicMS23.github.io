let step = 0;

function nextPage() {
    const book = document.getElementById("book");

    if (step === 0) {
        book.classList.add("cover-flipped");
        step = 1;
    } else if (step === 1) {
        book.classList.add("page1-flipped");
        step = 2;
    } else if (step === 2) {
        book.classList.add("page2-flipped");
        step = 3;
    } else if (step === 3) {
        book.classList.add("page3-flipped");
        step = 4;
    } else if (step === 4) {
        book.classList.add("page4-flipped");
        step = 5;
    } else if (step === 5) {
        book.classList.add("page5-flipped");
        step = 6;
    } else if (step === 6) {
        book.classList.add("page6-flipped");
        step = 7;
    } else if (step === 7) {
        book.classList.add("page7-flipped");
        step = 8;
    } else if (step === 8) {
        book.classList.add("page8-flipped");
        step = 9;
    } else if (step === 9) {
        book.classList.add("page9-flipped");
        step = 10;
    }
}

function prevPage() {
    const book = document.getElementById("book");

    if (step === 10) {
        book.classList.remove("page9-flipped");
        step = 9;
    } else if (step === 9) {
        book.classList.remove("page8-flipped");
        step = 8;
    } else if (step === 8) {
        book.classList.remove("page7-flipped");
        step = 7;
    } else if (step === 7) {
        book.classList.remove("page6-flipped");
        step = 6;
    } else if (step === 6) {
        book.classList.remove("page5-flipped");
        step = 5;
    } else if (step === 5) {
        book.classList.remove("page4-flipped");
        step = 4;
    } else if (step === 4) {
        book.classList.remove("page3-flipped");
        step = 3;
    } else if (step === 3) {
        book.classList.remove("page2-flipped");
        step = 2;
    } else if (step === 2) {
        book.classList.remove("page1-flipped");
        step = 1;
    } else if (step === 1) {
        book.classList.remove("cover-flipped");
        step = 0;
    }
}
